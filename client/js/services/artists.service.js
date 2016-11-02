(function(){
  'use strict';

  angular.module('app')
    .factory('ArtistsService', ArtistsService);

  ArtistsService.$inject = ['$http'];

  function ArtistsService($http){

    function getArtists(){
      $http.get('/artists', function(response){
        console.log(response);
      })
    }

    var service = {
      getArtists: getArtists
    }

    return service;

  } // this closes ArtistsService


})();
