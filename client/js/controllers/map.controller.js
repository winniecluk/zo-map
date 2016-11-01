(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['CountriesService', '$http', '$scope'];

  function MapController(CountriesService, $http, $scope){
    var vm = this;
    vm.title = 'hey there';

    CountriesService.getCountries(function(artistsArr, group_a) {
      vm.artistsArr = artistsArr;
      vm.group_a = group_a;
      setUpEvtListeners(vm.group_a);
    });

    function setUpEvtListeners(arr){
      arr.forEach(function(el, idx, arr){
        addMouseover(el);
        addMouseleave(el);
        addClickEvt(el);
      })
    }

    function addMouseover(el){
      el.node.addEventListener('mouseover', function(evt){
        this.setAttribute('fill', 'gold');
        vm.country = el.data('country');
        $scope.$apply();
      })
    }



    // change detection, when any of the props change, will re-render, views update
    // if i don't trigger change detection cycle, will do it manually
    //

    function addMouseleave(el){
      el.node.addEventListener('mouseleave', function(evt){
        this.setAttribute('fill', 'black');
        vm.country = ''
        $scope.$apply();
      })
    }

    function addClickEvt(el){
      el.node.addEventListener('click', function(evt){
        vm.countryArtist = el.data('artists');
        console.log(vm.countryArtist);
      })
    }

  } // this closes MapController function

})(); // this closes entire IIFE
