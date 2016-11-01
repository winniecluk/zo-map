(function(){
  'use strict';

  angular.module('app')
    .factory('CountriesService', CountriesService);

  CountriesService.$inject = ['MapService', '$http'];

  function CountriesService(MapService, $http){
    var group_a = MapService.group_a;
    var artistsArr = [];


    console.log(group_a);

    function getCountries(cb){
      $http.get('/api/countries').then(function(response){
        response.data.forEach(function(country, countryIdx){
          // console.log(country);
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
      artistsArr: artistsArr,
      getCountries: getCountries
    }

    return service;
  }


})();
