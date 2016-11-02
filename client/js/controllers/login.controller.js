(function(){
  'use strict';

  angular.module('app')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$http', 'LogInService', '$state'];

  function LogInController($http, LogInService, $state){
    var vm = this;
    vm.login = logIn;

    function logIn(username, password){
      LogInService.login(vm.username, vm.password)
        .then(function(user){
          console.log('controller > then ', user)
          console.log(user);
          $state.go('artists');
        })
        .catch(function(err){
          console.log("controller > catch", err)
          vm.username = '';
          vm.password = '';
          console.log('login error');
        })
    } // closes logIn function

    // function login(username, password){
    //   $http.post('/login', {username, password})
    //     .then(function(response){
    //       console.log(response.data.token);
    //       TokenService.storeToken(response.data.token);
    //       vm.user = TokenService.decodeToken(response.data.token);
    //       console.log(vm.user);
    //     }, function(err){
    //       console.log(err);
    //     });
    // }

  } // this closes the LogInController function

})();
