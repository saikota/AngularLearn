'use strict';

/**
 * @ngdoc function
 * @name angularLearnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLearnApp
 */
angular.module('angularLearnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
