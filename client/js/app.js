(function(){
  'use strict';

  angular.module('app', ['ui.router'])
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('map', {
        url: '/',
        controller: 'MapController as vm',
        templateUrl: 'templates/map.html'
      })
      .state('signup', {
        url: '/signup',
        controller: 'SignUpController as vm',
        templateUrl: 'templates/signup.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LogInController as vm',
        templateUrl: 'templates/login.html'
      })
      .state('artists', {
        url: '/artists',
        resolve: {
          LogInService: 'LogInService',
          user: function(LogInService) {
            return LogInService.getUser();
          }
        },
        controller: 'ArtistsController as vm',
        templateUrl: 'templates/artists.html'
      })
    $urlRouterProvider.otherwise('/');
  }

})();
