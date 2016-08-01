'use strict';
/**
* webFrontApp Module
*
* Description
*/
angular.module('webFrontApp')
.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService) {
	console.log(homeService.getHomeUI().success(function(response) {
		$scope.name = response.status;
	}));
}]);
