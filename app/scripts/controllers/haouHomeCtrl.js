'use strict';
/**
* webFrontApp Module
*
* haoustore首页控制器
*/
angular.module('webFrontApp')
.controller('haouHomeCtrl', ['$scope', function($scope){
	// 控制器初始化函数
	function init() {
		S.isHome = true;
	}
	var S = this;
	S.name = 'haoustore首页控制器';
	init(); // 初始化
}]);