(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['ArtistsService', '$http'];

  function ArtistsController(ArtistsService, $http){
    var vm = this;
    vm.artistsAlerts = [];
    vm.approveArtist = approveArtist;
    vm.rejectArtist = rejectArtist;
    vm.popAlert = popAlert;
    vm.pendingArtists = [];
    vm.approvedArtists = [];
    vm.rejectedArtists = [];

    function popAlert(){
      vm.artistsAlerts.pop();
    }

    ArtistsService.getArtists()
      .then(function(artists){
        artists.forEach(function(el){
          if (el.approved == 0){
            vm.pendingArtists.push(el);
          }
          if (el.approved == 1){
            vm.approvedArtists.push(el);
          }
          if (el.approved == 2){
            vm.rejectedArtists.push(el);
          }
        })
        vm.artists = artists;
        // console.log(artists);
      });

    function approveArtist(artist){
      console.log('click approveArtist');
      vm.artistsAlerts.push(1);
      $http.put(`api/artists?approve=true&id=${artist._id}`)
        .then(function(response){
          console.log(response);
        });
      var index = vm.pendingArtists.indexOf(artist);
      vm.pendingArtists.splice(index, 1);
      vm.approvedArtists.push(artist);
    }

    function rejectArtist(artist){
      console.log('click rejectArtist');
      $http.put(`api/artists/reject/${artist._id}`)
        .then(function(response){
          console.log(response);
        });
    }

  }

})();
