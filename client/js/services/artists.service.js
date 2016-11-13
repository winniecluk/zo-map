(function(){
  'use strict';

  angular.module('app')
    .factory('ArtistsService', ArtistsService);

  ArtistsService.$inject = ['$http'];

  function ArtistsService($http){

    function getArtists(){
      return $http.get('/api/artists')
        .then(function(response){
        return response.data;
      })
    } // close getArtists

    var service = {
      getArtists: getArtists
    }

    return service;

  } // this closes ArtistsService


})();
