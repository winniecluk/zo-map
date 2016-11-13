(function(){
  'use strict';

  angular.module('app')
    .controller('AboutUsController', AboutUsController);

  AboutUsController.$inject = ['$interval', 'TokenService'];

  function AboutUsController($interval, TokenService){
    var vm = this;

    vm.image = 1;

    var carousel = $interval(function(){
      if (vm.image < 4) {
        vm.image++;
      } else {
        vm.image = 1;
      }
    }, 3000);

  } // this closes the controller function

})();
