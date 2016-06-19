'use strict';


angular.module('cloudsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.tinymce'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/main/main.html',
        controller : 'MainController'
      })
      .when('/help', {
        templateUrl: 'pages/help/help.html',
        controller : 'HelpController'
      })
      .when('/chat', {
        templateUrl: 'pages/chat/chat.html',
        controller : 'ChatController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
});

