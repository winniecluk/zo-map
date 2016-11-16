(function(){
  'use strict';

  angular.module('app')
    .controller('AboutUsController', AboutUsController);

  AboutUsController.$inject = ['$interval', 'TokenService', 'LogInService'];

  function AboutUsController($interval, TokenService, LogInService){
    var vm = this;
    vm.logout = LogInService.logout;
    vm.image = 1;

    LogInService.showLogout();

    var carousel = $interval(function(){
      if (vm.image < 4) {
        vm.image++;
      } else {
        vm.image = 1;
      }
    }, 3000);

  } // this closes the controller function

})();
