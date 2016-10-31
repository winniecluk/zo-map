(function(){
  'use strict';

  angular.module('app', ['ui.router'])
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider){
console.log('routes')
    $stateProvider
      .state('map', {
        url: '/',
        controller: 'MapController as map',
        templateUrl: 'templates/map.html'
      })
      .state('signup', {
        url: '/signup',
        controller: 'SignUpController as sign',
        templateUrl: 'templates/signup.html'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
