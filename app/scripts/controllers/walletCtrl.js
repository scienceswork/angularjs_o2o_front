'use strict';
/**
* webFrontApp Module
*
* walletCtrl我的钱包控制器
*/
angular.module('webFrontApp')
.controller('walletCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	// 控制器初始化函数
	function init() {
		S.amount = $stateParams.amount;
	}
	var S = this;
	init();// 初始化
}])