'use strict';
/**
* webFrontApp Module
*
* login控制器
*/
angular.module('webFrontApp')
.controller('loginCtrl', ['$scope', 'haouHttp', '$state', '$window', 'storageService', 'authService', '$localStorage', function($scope, haouHttp, $state, $window, storageService, authService, $localStorage){
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
		loginOperation(data);
	}
	// 登录按钮点击函数，传入表单数据，短信验证码登录
	function loginPhone(data) {
		console.log(data);
		loginOperation(data);
	}
	// 登录操作
	function loginOperation(data) {
		S.submitting = true; // 表示已经点击登录按钮
		S.errors = ''; // 错误信息
		data.openId = $localStorage.openId; // 传递openId
		authService.login(data).then(function() {
			// 执行authService操作
			if (data.openId) {
				haouHttp.get('user/wechatGetToken', {
					'params': {
						'openId': data.openId
					},
					'noAuth': true,
					'version': true
				}).success(function(response) {
					$localStorage.token = reponse.data.token;
				}).error(function(response) {
					alert(response.error);
				});
			}
		}, function(response) {
			if (response.data.error) {
				alert('未知错误');
			}
		})['finally'](function() {
			S.submitting = false;
		});
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