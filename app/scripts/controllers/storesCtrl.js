'use strict';
/**
* webFrontApp Module
*
* StoresCtrl 好友店控制器
*/
angular.module('webFrontApp')
.controller('storesCtrl', ['$scope', function($scope){
	// 控制器初始化函数
	function init() {
		S.isStores = true;
	}
	// 使用控制器别名的写法
	var S = this;
	init(); // 初始化
}]);