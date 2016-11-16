(function(){
  'use strict';

  angular.module('app')
    .factory('LogInService', LogInService);

  LogInService.$inject = ['TokenService', '$http', '$rootScope', '$state']

  function LogInService(TokenService, $http, $rootScope, $state){

    function login(username, password){
      return $http.post('/login', {username, password})
        .then(function(response){
          TokenService.storeToken(response.data.token);
          var user = TokenService.decodeToken(response.data.token);
          return user;
        })
        .catch(function (err) {
          return Promise.reject(err);
        })
    }

    $rootScope.logout = function(){
      TokenService.removeToken();
      $state.go('aboutus');
    }

    function getUser(){
      var token = TokenService.getToken();
      if (token){
        var user = TokenService.decodeToken(token);
        return user;
      } else {
        return false;
      }
    }

    function showLogout(){
      if (getUser()){
        $rootScope.loggedIn = true;
      } else {
        $rootScope.loggedIn = false;
      }
    }

    var service = {
      login: login,
      getUser: getUser,
      showLogout: showLogout,
    }

    return service;
  }

})();
