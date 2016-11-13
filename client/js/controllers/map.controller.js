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

    vm.artistsArr = [];

    MapService.renderMap();
    getCountries();

    function getCountries(){
      $http.get('/api/countries').then(function(response){
        response.data.forEach(function(country, countryIdx){
          vm.artistsArr.push(country);
        });
        var group_a = MapService.getGroup_a();
        group_a.forEach(function(el, idx, arr){
          el.data('country', vm.artistsArr[idx].name);
          el.data('artists', vm.artistsArr[idx].artists);
        })
      setUpEvtListeners(group_a);
      })
    }

    function submitSearch(input){
      var searchableWord = makeSearchableWord(input);
      var idx = vm.artistsArr.map(function(el){
        return el.name;
      }).indexOf(searchableWord);
      vm.selectedCountry = vm.artistsArr[idx].name;
      vm.countryArtists = vm.artistsArr[idx].artists;
    }

    function makeSearchableWord(str){
      var strArr = str.split(' ');
      var newArr = strArr.map(function(el, wordIdx){
        if (el != 'of' && el != 'and'){
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
        } else {
          return el;
        }
      })
      return newArr.join(' ');
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
          vm.country = countryDisplay;
        })
      })
    }

    function addClickEvt(el){
      el.node.addEventListener('click', function(evt){
        $scope.$apply(function() {
          vm.countryArtists = el.data('artists');
          vm.selectedCountry = el.data('country');
        });
      })
    }

  } // this closes MapController function

})(); // this closes entire IIFE


