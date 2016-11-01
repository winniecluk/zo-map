(function(){
  'use strict';

  angular.module('app')
    .factory('InterceptorService', InterceptorService);

    InterceptorService.$inject = ['TokenService'];

    function InterceptorService(TokenService){

      function addToken(config){
        var token = TokenService.getToken();
        if (token){
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`
        }
        return config;
      }

      var service = {
        request: addToken
      }

      return service;
  }
})();
