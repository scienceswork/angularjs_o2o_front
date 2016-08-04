'use strict';
/**
* webFrontApp Module
*
* profileUnbindPhoneCtrl 解绑手机控制器
*/
angular.module('webFrontApp')
.controller('profileUnbindPhoneCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){
	// 控制器初始化
	function init() {
		S.header = {
			'name': '解绑手机', // 头部名称
			'showBack': true, // 是否显示后退按钮，为true
			'goBack': function() {
				// 因为有两个入口可以直接到达解绑手机页面，故使用浏览器历史记录进行后退
				$window.history.back();
			}
		};
		S.phone = $stateParams.phone;// 接收URL传过来的手机电话号码
		
	}
	var S = this;
	init();// 初始化
}])