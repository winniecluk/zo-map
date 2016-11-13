(function(){
  'use strict';

  angular.module('app')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$http', 'LogInService', '$state'];

  function LogInController($http, LogInService, $state){
    var vm = this;
    vm.login = logIn;
    vm.enter = enter;

    function enter($event, username, password){
      if ($event.keyCode === 13){
        logIn(vm.username, vm.password);
      }
    }

    function logIn(username, password){
      LogInService.login(vm.username, vm.password)
        .then(function(user){
          $state.go('artists');
        })
        .catch(function(err){
          vm.username = '';
          vm.password = '';
          vm.error = err.data.error;
        })
    } // closes logIn function

  } // this closes the LogInController function

})();
