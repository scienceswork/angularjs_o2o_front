'use strict';
/**
* webFrontApp Module
*
* login控制器
*/
angular.module('webFrontApp')
.controller('loginCtrl', ['$scope', 'haouHttp', '$state', function($scope, haouHttp, $state){
	// 控制器初始化函数
	function init() {
		S.goBack = goBack; // 后退
		S.goState = goState; // 页面跳转
		S.name = '谢泽辉';
		S.login = login; // 登陆函数
		S.isLoginByPhone = false; // 是否使用验证码登录，默认为false
	}
	// 登陆按钮点击函数，传入表单数据
	function login(data) {
		console.log(data);
	}
	// 后退
	function goBack() {
		$state.go('profile');
	}
	// 页面跳转
	function goState(state) {
		$state.go(state);
	}
	// 使用控制器别名的写法
	var S = this;
	init();
}]);