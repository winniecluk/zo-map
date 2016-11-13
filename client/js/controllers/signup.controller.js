(function(){
  'use strict';

  angular.module('app')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', '$state', 'MapService'];

  function SignUpController($http, $state, MapService){
    var vm = this;
    vm.newArtist = {};
    vm.postArtist = postArtist;
    vm.blankForm = true;

    function postArtist(evt){
      var newArtist = vm.newArtist;
      $http.post('api/artists', {newArtist}).then(function(response){
        vm.blankForm = false;
      })
    } // this ends postArtist function
  } // this ends SignUpController function

})();
