'use strict';

/**
 * @ngdoc function
 * @name angularLearnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLearnApp
 */
angular.module('angularLearnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
