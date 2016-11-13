(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', '$http', '$scope'];

  function MapController(MapService, $http, $scope){
    var vm = this;
    vm.searchInput;
    vm.submitSearch = submitSearch;
    vm.selectedCountry;
    vm.countryArtists;

    vm.countriesArr = [];

    MapService.renderMap();
    getCountries();

    function getCountries(){
      $http.get('/api/countries').then(function(response){
        response.data.forEach(function(country, countryIdx){
          vm.countriesArr.push(country);
        });
        var group_a = MapService.getGroup_a();
        group_a.forEach(function(el, idx, arr){
          el.data('country', vm.countriesArr[idx].name);
          el.data('artists', vm.countriesArr[idx].artists);
        })
      setUpEvtListeners(group_a);
      })
    }

    function submitSearch(input){
      clearError();
      var searchableWord = makeSearchableWord(input);
      var idx = vm.countriesArr.map(function(el){
        return el.name;
      }).indexOf(searchableWord);
      if (idx != -1) {
        vm.selectedCountry = vm.countriesArr[idx].name;
        vm.countryArtists = vm.countriesArr[idx].artists;
      } else {
        vm.error = 'Country not found. Try again.';
      }
    }

    function makeSearchableWord(str){
      var cleanArr = makeCleanArr(str);
      var newArr = cleanArr.map(function(el, wordIdx){
        if (el != 'of' && el != 'and'){
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
        } else {
          return el;
        }
      })
      return newArr.join(' ');
    }

    function makeCleanArr(str){
      var strArr = str.split(' ');
      var cleanArr = [];
      strArr.forEach(function(el, i, arr){
        if (el){
          cleanArr.push(el);
        }
      })
      return cleanArr;
    }

    function clearError(){
      vm.error = '';
    }

    function setUpEvtListeners(arr){
      arr.forEach(function(el){
        addClickEvt(el);
        addMouseEvt(el, 'mouseover', 'gold', el.data('country'));
        addMouseEvt(el, 'mouseleave', 'black', '');
      })
    }

    function addMouseEvt(el, mouseEvt, color, countryDisplay) {
      el.node.addEventListener(mouseEvt, function(evt){
        $scope.$apply(function(){
          el.node.setAttribute('fill', color);
          vm.countryMap = countryDisplay;
        })
      })
    }

    function addClickEvt(el){
      el.node.addEventListener('click', function(evt){
        $scope.$apply(function() {
          clearError();
          vm.countryArtists = el.data('artists');
          vm.selectedCountry = el.data('country');
        });
      })
    }

  } // this closes MapController function

})(); // this closes entire IIFE


