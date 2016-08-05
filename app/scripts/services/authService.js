'use strict';
/**
* webFrontApp Module
*
* authService auth认证服务
*/
angular.module('webFrontApp')
.factory('authService', ['OAuth', function(OAuth){
	// 登录（未完成）
	function login(option) {
		return OAuth.getAccessToken(option, {
			'version': true
		});
	}
	// 注销，移除Token表示退出登陆
	function logout() {
		return OAuth.revokeToken();
	}
	// 判断用户是否通过了验证
	function isAuthenticated() {
		return OAuth.isAuthenticated();
	}
	var service = {
		'login': login,
		'logout': logout,
		'isAuthenticated': isAuthenticated
	}
	return service;
}])