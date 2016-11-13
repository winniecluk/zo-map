(function(){
  'use strict';

  angular.module('app')
    .factory('SearchService', SearchService);

  function SearchService(){

    function submitSearch(input){
      var searchableWord = makeSearchableWord(input);
      var idx = this.countriesArr.map(function(el){
        return el.name;
      }).indexOf(searchableWord);
      if (idx != -1) {
        this.error = '';
        this.selectedCountry = this.countriesArr[idx].name;
        this.countryArtists = this.countriesArr[idx].artists;
      } else {
        this.error = 'Country not found. Try again.';
        this.selectedCountry = '';
        this.countryArtists = '';
      }
    }

    function makeSearchableWord(str){
      var cleanArr = makeCleanArr(str);
      var newArr = cleanArr.map(function(el, wordIdx){
        if (el != 'of' && el != 'and'){
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
        } else {
          return el;
        }
      })
      return newArr.join(' ');
    }

    function makeCleanArr(str){
      var strArr = str.split(' ');
      var cleanArr = [];
      strArr.forEach(function(el, i, arr){
        if (el){
          cleanArr.push(el);
        }
      })
      return cleanArr;
    }

    var service = {
      submitSearch: submitSearch,
      // makeSearchableWord: makeSearchableWord,
      // makeCleanArr: makeCleanArr
    }

    return service;

  } // this closes Search Service


})();
