'use strict';
/**
* webFrontApp Module
*
* profileCtrl 个人中心控制器
*/
angular.module('webFrontApp')
.controller('profileCtrl', ['$scope', '$state', function($scope, $state){
	// 控制器初始化函数
	function init() {
		S.ifProfile = true; // 个人中心导航标志
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}
	// 控制器别名写法
	var S = this;
	S.goState = goState;
	init(); // 初始化
}]);