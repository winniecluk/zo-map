(function(){
  'use strict';

  angular.module('app', ['ui.router'])
    .config(Routes)
    .run(run);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
  run.$inject = ['$rootScope', 'LogInService', '$state'];

  function run ($rootScope, LogInService, $state){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
      if (toState.authReq && !LogInService.getUser()){
        event.preventDefault();
        $state.go('login');
      }
    })
  }

  function Routes($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('aboutus', {
        url: '/',
        controller: 'AboutUsController as vm',
        templateUrl: 'templates/aboutus.html',
        authReq: false
      })
      .state('map', {
        url: '/map',
        controller: 'MapController as vm',
        templateUrl: 'templates/map.html',
        authReq: false
      })
      .state('signup', {
        url: '/signup',
        controller: 'SignUpController as vm',
        templateUrl: 'templates/signup.html',
        authReq: false
      })
      .state('login', {
        url: '/login',
        controller: 'LogInController as vm',
        templateUrl: 'templates/login.html',
        authReq: false
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
        templateUrl: 'templates/artists.html',
        authReq: true
      })
    $urlRouterProvider.otherwise('/');
  }

})();
