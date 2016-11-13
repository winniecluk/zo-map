(function(){
  'use strict';

  angular.module('app')
    .factory('TokenService', TokenService);

  TokenService.$inject = ['$window'];

  function TokenService($window){

    var loggedIn = true;

    function storeToken(token){
      return $window.localStorage.setItem('token', token);
    }

    function getToken(){
      return $window.localStorage.getItem('token');
    }

    function removeToken(){
      return $window.localStorage.removeItem('token');
    }

    function decodeToken(token){
      return JSON.parse($window.atob(token.split('.')[1]));
    }

    var service = {
      storeToken: storeToken,
      getToken: getToken,
      removeToken: removeToken,
      decodeToken: decodeToken,
      loggedIn: loggedIn
    }

    return service;
  } // this closes TokenService function
})();
