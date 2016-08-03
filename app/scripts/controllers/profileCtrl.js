'use strict';
/**
* webFrontApp Module
*
* profileCtrl 个人中心控制器
*/
angular.module('webFrontApp')
.controller('profileCtrl', ['$scope', '$state', '$localStorage', '$sessionStorage', 'ngDialog', function($scope, $state, $localStorage, $sessionStorage, ngDialog) {
	// 控制器初始化函数
	function init() {
		S.ifProfile = true; // 个人中心导航标志
		S.defaultGravatar = 'http://localhost:9000/images/yeoman.png'; // 没有登录时候的默认头像
		delete $localStorage.name;
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}
	// 控制器别名写法
	var S = this;
	$localStorage.name = '谢泽辉';
	// delete $localStorage;
	S.name = $localStorage.name;
	$sessionStorage.name = 'haou';
	console.log($localStorage);
	S.goState = goState;
	init(); // 初始化
	console.log($sessionStorage);
}]);