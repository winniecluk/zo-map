(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', 'SearchService', '$http', '$scope'];

  function MapController(MapService, SearchService, $http, $scope){
    var vm = this;
    vm.searchInput;
    vm.submitSearch = SearchService.submitSearch;
    vm.selectedCountry;
    vm.countryArtists;
    vm.countriesArr = [];
    vm.enter = enter;

    MapService.renderMap();
    getCountries();

    function enter($event){
      if ($event.keyCode === 13){
        vm.submitSearch(vm.searchInput);
      }
    }

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


