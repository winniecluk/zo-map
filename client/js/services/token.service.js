(function(){
  'use strict';

  angular.module('app')
    .factory('TokenService', TokenService);

  TokenService.$inject = ['$window'];

  function TokenService($window){

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
      return $window.atob(token.split('.')[1]);
    }

    var service = {
      storeToken: storeToken,
      getToken: getToken,
      removeToken: removeToken,
      decodeToken: decodeToken
    }

    return service;
  } // this closes TokenService function
})();
