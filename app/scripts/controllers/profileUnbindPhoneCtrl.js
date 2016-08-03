'use strict';
/**
* webFrontApp Module
*
* profileUnbindPhoneCtrl 解绑手机控制器
*/
angular.module('webFrontApp')
.controller('profileUnbindPhoneCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	var S = this;
	S.phone = $stateParams.phone;
}])