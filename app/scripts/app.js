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
  }).controller('MyMainCtrl', [function () {
    var self = this;
    self.welcomeMsg = "Welcome to Angular Application Using ControllerMsg!!";
    var notShowedMsg = "This Message will not be shown";

    self.changeMsg = function () {
      self.welcomeMsg = " Now The Welcome Msg changed";
    };

    self.notes = [
      {id: 1, label: 'First Note', done: false,asignee:'sai'},
      {id: 2, label: 'Second Note', done: false,asignee:'ram'},
      {id: 3, label: 'Done Note', done: true},
      {id: 4, label: 'Last Note', done: false}
    ];

    self.getNoteClass=function(status){
      return {
        done:status,
        pending:!status
      };
    };

    self.notesObj = {
      shyam: {
        id: 1,
        label: 'First Note',
        done: false
      },
      Misko: {
        id: 3,
        label: 'Finished Third Note',
        done: true
      },
      brad: {
        id: 2,
        label: 'Second Note',
        done: false
      }
    };
  }]);
