(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['ArtistsService', '$http'];

  function ArtistsController(ArtistsService, $http){
    var vm = this;
    vm.approveArtist = approveArtist;
    vm.rejectArtist = rejectArtist;

    ArtistsService.getArtists()
      .then(function(artists){
        vm.artists = artists;
      });

    function approveArtist(artist){
      console.log('click approveArtist');
      $http.put(`api/artists?approve=true&id=${artist._id}`)
        .then(function(response){
          console.log(response);
        });
    }

    function rejectArtist(artist){

    }

  }

})();
