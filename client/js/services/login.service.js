(function(){
  'use strict';

  angular.module('app')
    .factory('LogInService', LogInService);

  LogInService.$inject = ['TokenService', '$http']

  function LogInService(TokenService, $http){

    function login(username, password){
      return $http.post('/login', {username, password})
        .then(function(response){
          console.log('service > then', response)
          TokenService.storeToken(response.data.token);
          var user = TokenService.decodeToken(response.data.token);
          return user;
        })
        .catch(function (err) {
          console.log('service > catch', err)
          return Promise.reject('err')
          // return "hello!"
        })
    }

    function getUser(){
      var token = TokenService.getToken();
      if (token){
        var user = TokenService.decodeToken(token);
        return user;
      }
    }

    var service = {
      login: login,
      getUser: getUser
    }

    return service;
  }

})();
