'use strict';
/**
* webFrontApp Module
*
* walletCtrl我的钱包控制器
*/
angular.module('webFrontApp')
.controller('walletCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state){
	// 控制器初始化函数
	function init() {
		S.amount = $stateParams.amount;// 获取余额
		S.header = {
			// 钱包页面头部信息，后退
			'goBack': function() {
				$state.go('profile');
			},
			// 头部顶部提现按钮时间
			'rightEvent': function() {
				$state.go('withdrawal', {
					'amount': $stateParams.amount
				})
			}
		};
	}
	var S = this;
	init();// 初始化
}])