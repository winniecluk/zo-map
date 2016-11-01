(function(){
  'use strict';

  angular.module('app')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$http'];

  function LogInController($http){
    var vm = this;
    vm.login = login;

    function login(){
      $http.post('/login', {hello: 'hello'}).then(function(response){
        console.log(response);
      });
    }

  } // this closes the LogInController function

})();
