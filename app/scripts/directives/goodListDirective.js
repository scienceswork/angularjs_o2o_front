'use strict';
angular.module('webFrontApp')
.directive('goodList', ['', function() {

  var o = {
    restrict: 'A',
    templateUrl: 'views/directive/goodListDirective.html'
  };
  return o;
}]);
