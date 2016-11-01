(function(){
  'use strict';

  angular.module('app')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$http', 'TokenService'];

  function LogInController($http, TokenService){
    var vm = this;
    vm.login = login;

    function login(username, password){
      $http.post('/login', {username, password})
        .then(function(response){
        TokenService.storeToken(response.data.token);
        vm.user = TokenService.decodeToken(response.data.token);
      });
    }

  } // this closes the LogInController function

})();
