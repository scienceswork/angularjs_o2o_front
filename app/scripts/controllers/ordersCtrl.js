'use strict';
/**
* webFrontApp Module
*
* ordersCtrl订单控制器
*/
angular.module('webFrontApp')
.controller('ordersCtrl', ['$scope', function($scope){
	// 控制器初始化函数
	function init() {
		S.isOrders = true; // 订单导航标记
	}
	// 控制器别名写法
	var S = this;
	init(); // 初始化
}]);