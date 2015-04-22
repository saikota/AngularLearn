'use strict';

/**
 * @ngdoc overview
 * @name angularLearnApp
 * @description
 * # angularLearnApp
 *
 * Main module of the application.
 */
angular
  .module('angularLearnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('MyMainCtrl',[function(){
    var self = this;
    self.welcomeMsg="Welcome to Angular Application Using ControllerMsg!!";
    var notShowedMsg="This Message will not be shown";
  }]);
