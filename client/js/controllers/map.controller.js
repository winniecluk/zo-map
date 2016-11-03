(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['CountriesService', '$http', '$scope'];

  function MapController(CountriesService, $http, $scope){
    var vm = this;
    vm.searchInput;
    vm.submitSearch = submitSearch

    CountriesService.getCountries(function(artistsArr, group_a) {
      vm.artistsArr = artistsArr;
      vm.group_a = group_a;
      setUpEvtListeners(vm.group_a);
    });

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
      var newArr = strArr.map(function(el, idx){
        if (el != 'of' && el != 'and'){
          return el.charAt(0).toUpperCase() + el.slice(1);
        } else {
          return el;
        }
      })
      return newArr.join(' ');
    }

    function setUpEvtListeners(arr){
      arr.forEach(function(el, idx, arr){
        addClickEvt(el);
        addMouseover(el);
        addMouseleave(el);
      })
    }

    function addMouseover(el){
      el.node.addEventListener('mouseover', function(evt){
        $scope.$apply(function(){
          el.node.setAttribute('fill', 'gold');
          vm.country = el.data('country');
        });
      })
    }

    function addMouseleave(el){
      el.node.addEventListener('mouseleave', function(evt){
        $scope.$apply(function(){
          el.node.setAttribute('fill', 'black');
          vm.country = ''
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
