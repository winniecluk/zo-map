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
          console.log(response.data.token);
          TokenService.storeToken(response.data.token);
          vm.user = TokenService.decodeToken(response.data.token);
          console.log(vm.user);
        }, function(err){
          console.log(err);
        });
    }

  } // this closes the LogInController function

})();
