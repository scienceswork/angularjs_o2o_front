'use strict';
/**
* webFrontApp Module
*
* haoustore首页控制器
*/
angular.module('webFrontApp')
.controller('haouHomeCtrl', ['$scope', '$state', function($scope, $state){
	// 控制器初始化函数
	function init() {
		S.isHome = true;
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}
	var S = this;
	S.goState = goState;
	S.name = 'haoustore首页控制器';
	init(); // 初始化
}]);