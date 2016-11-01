(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['CountriesService', '$http', '$scope'];

  function MapController(CountriesService, $http, $scope){
    var vm = this;
    vm.title = 'hey there';
    vm.country = 'hello'
    CountriesService.getCountries(function(artistsArr, group_a) {
      vm.artistsArr = artistsArr;
      vm.group_a = group_a;
      console.log('this is artistsArr on controller ' + vm.group_a[0]);
      setUpEvtListeners(vm.group_a);
    });

    function setUpEvtListeners(arr){
      arr.forEach(function(el, idx, arr){
        addMouseover(el);
        addMouseleave(el);
      })
    }

    function addMouseover(el){
      el.node.addEventListener('mouseover', function(evt){
        this.setAttribute('fill', 'gold');
        // console.log(el.data('country'));
        vm.country = el.data('country');
        $scope.$apply();
        // console.log(vm.country);
      })
    }



    // change detection, when any of the props change, will re-render, views update
    // if i don't trigger change detection cycle, will do it manually
    //

    function addMouseleave(el){
      el.node.addEventListener('mouseleave', function(evt){
        this.setAttribute('fill', 'black');
        vm.country = ''
      })
    }

  } // this closes MapController function

})(); // this closes entire IIFE
