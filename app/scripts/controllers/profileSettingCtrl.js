'use strict';
/**
* webFrontApp Module
*
* profileSettingCtrl 个人信息控制器
*/
angular.module('webFrontApp')
.controller('profileSettingCtrl', ['$scope', '$state', function($scope, $state){
	// 控制器初始化函数
	function init() {
		S.header = {
			name: '个人信息',// 头部名称
			goBack: function() { // 后退
				$state.go('profile');
			}
		}
	}
	// 控制器别名写法
	var S = this;
	init(); // 初始化
}])