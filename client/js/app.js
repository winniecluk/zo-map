(function(){
  'use strict';

  angular.module('app', ['ui.router'])
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('map', {
        url: '/map',
        controller: 'MapController as map',
        templateUrl: 'templates/map.html'
      })

    $urlRouterProvider.otherwise('/map');
  }

})();
