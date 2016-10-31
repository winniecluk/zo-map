(function(){
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['MapService', '$http'];

  function MapController(MapService, $http){
    var vm = this;
    vm.title = 'hey there';

    $http.get('/api/countries').then(function(response){
      console.log(response);
    })


    // console.log('this is rsr ' + vm.rsr);
    // console.log('this is group_a ' + vm.group_a)

  } // this closes MapController function

})(); // this closes entire IIFE
