(function(){
  'use strict';

  angular.module('app')
    .factory('CountriesService', CountriesService);

  CountriesService.$inject = ['MapService', '$http'];

  function CountriesService(MapService, $http){
    var group_a = MapService.group_a;
    var artistsArr = [];

    function getCountries(cb){
      $http.get('/api/countries').then(function(response){
        response.data.forEach(function(country, countryIdx){
          if (country.name == 'United States'){
            console.log(country);
          }
          artistsArr.push(country);
        });
        group_a.forEach(function(el, idx, arr){
          el.data('country', artistsArr[idx].name);
          el.data('artists', artistsArr[idx].artists);
        })
        cb(artistsArr, group_a);
      })
    }

    // function getArtistsArr () {
    //   return artistsArr
    // }

    var service = {
      getCountries: getCountries
    }

    return service;
  }


})();
