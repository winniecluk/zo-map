(function(){
  'use strict';

  angular.module('app')
    .factory('LogInService', LogInService);

  LogInService.$inject = ['TokenService', '$http']

  function LogInService(TokenService, $http){

    function login(username, password){
      console.log('click');
      return $http.post('/login', {username, password})
        .then(function(response){
          TokenService.storeToken(response.data.token);
          var user = TokenService.decodeToken(response.data.token);
          console.log(user);
          return user;
        })
    }

    var service = {
      login: login

    }

    return service;
  }

})();
