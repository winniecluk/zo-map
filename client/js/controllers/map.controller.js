(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', '$http'];

  function MapController(MapService, $http){
    var vm = this;
    vm.title = 'hey there';




  } // this closes MapController function

})(); // this closes entire IIFE
