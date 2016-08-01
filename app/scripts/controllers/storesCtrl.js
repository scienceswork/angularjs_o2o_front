'use strict';
/**
* webFrontApp Module
*
* StoresCtrl 好友店控制器
*/
angular.module('webFrontApp')
.controller('storesCtrl', ['$scope', '$state', function($scope, $state){
	// 控制器初始化函数
	function init() {
		S.isStores = true;
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}	
	// 使用控制器别名的写法
	var S = this;
	S.goState = goState;
	init(); // 初始化
}]);