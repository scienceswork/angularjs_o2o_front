'use strict';
/**
* webFrontApp Module
*
* ordersCtrl订单控制器
*/
angular.module('webFrontApp')
.controller('ordersCtrl', ['$scope', '$state', function($scope, $state){
	// 控制器初始化函数
	function init() {
		S.isOrders = true; // 订单导航标记
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