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
	S.goBack = goBack;
	S.goState = goState;
	S.name = '谢泽辉';
	S.login = login;
}]);