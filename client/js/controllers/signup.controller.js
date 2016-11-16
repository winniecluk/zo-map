(function(){
  'use strict';

  angular.module('app')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', '$state', 'MapService', 'LogInService'];

  function SignUpController($http, $state, MapService, LogInService){
    var vm = this;
    vm.newArtist = {};
    vm.postArtist = postArtist;
    vm.blankForm = true;
    LogInService.showLogout();


    function postArtist(evt){
      var newArtist = vm.newArtist;
      $http.post('api/artists', {newArtist}).then(function(response){
        vm.blankForm = false;
      })
    } // this ends postArtist function
  } // this ends SignUpController function

})();
