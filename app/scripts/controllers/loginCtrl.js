'use strict';
/**
* webFrontApp Module
*
* login控制器
*/
angular.module('webFrontApp')
.controller('loginCtrl', ['$scope', 'haouHttp', '$state', '$window', 'storageService', 'authService', function($scope, haouHttp, $state, $window, storageService, authService){
	// 控制器初始化函数
	function init() {
		S.goBack = goBack; // 后退
		S.goState = goState; // 页面跳转
		S.data = {};
		S.data.phone = '15113992194';
		S.data.password = 'zuowoziji';
		S.login = login; // 账户密码登陆函数
		S.loginPhone = loginPhone;// 短信验证码登录函数
		S.isLoginByPhone = false; // 是否使用验证码登录，默认为false
		S.phoneData = {};
		S.phoneData.openId = storageService.openId();
	}
	// 登陆按钮点击函数，传入表单数据，帐号密码登录
	function login(data) {
		console.log(data);
		authService.login(data);
	}
	// 登录按钮点击函数，传入表单数据，短信验证码登录
	function loginPhone(data) {
		console.log(data);
		console.log(S.phoneData);
	}
	// 后退
	function goBack() {
		$window.history.back();
	}
	// 页面跳转
	function goState(state) {
		$state.go(state);
	}
	// 使用控制器别名的写法
	var S = this;
	init();
}]);