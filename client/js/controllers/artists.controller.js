(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['ArtistsService', '$http', 'TokenService', '$state', '$scope'];

  function ArtistsController(ArtistsService, $http, TokenService, $state, $scope){
    var vm = this;
    vm.artistsAlerts = [];
    vm.approveArtist = approveArtist;
    vm.rejectArtist = rejectArtist;
    vm.popAlert = popAlert;
    vm.pendingArtists = [];
    vm.approvedArtists = [];
    vm.rejectedArtists = [];
    vm.logout = logout;


    function logout (){
      TokenService.removeToken();
      $state.go('aboutus');
    }


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
      });

    function approveArtist(artist){
      vm.artistsAlerts.push(1);
      $http.put(`api/artists?approve=true&id=${artist._id}`)
        .then(function(response){
        });
      var index = vm.pendingArtists.indexOf(artist);
      vm.pendingArtists.splice(index, 1);
      vm.approvedArtists.push(artist);
    }

    function rejectArtist(artist){
      $http.put(`api/artists/reject?id=${artist._id}`)
        .then(function(response){
          console.log(response);
        });
      var index = vm.pendingArtists.indexOf(artist);
      vm.pendingArtists.splice(index, 1);
      vm.rejectedArtists.push(artist);
    } // this closes rejectArtist function

  }

})();
