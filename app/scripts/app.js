'use strict';

/**
 * @ngdoc overview
 * @name webFrontApp
 * @description
 * # webFrontApp
 *
 * Main module of the application.
 */
angular
  .module('webFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
var app = angular.module('webFrontApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 0;
});