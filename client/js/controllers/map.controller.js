(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', '$http'];

  function MapController(MapService, $http){
    var vm = this;
    vm.title = 'hey there';
    MapService.getCountries(function(artistsArr, group_a) {
      vm.artistsArr = artistsArr;
      vm.group_a = group_a;
      console.log('this is artistsArr on controller ' + vm.artistsArr[0].name);
    })



  } // this closes MapController function

})(); // this closes entire IIFE
