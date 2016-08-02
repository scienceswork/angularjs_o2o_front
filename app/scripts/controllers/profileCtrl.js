'use strict';
/**
* webFrontApp Module
*
* profileCtrl 个人中心控制器
*/
angular.module('webFrontApp')
.controller('profileCtrl', ['$scope', '$state', '$localStorage', function($scope, $state, $localStorage){
	// 控制器初始化函数
	function init() {
		S.ifProfile = true; // 个人中心导航标志
		S.defaultGravatar = 'http://localhost:9000/images/yeoman.png'; // 没有登录时候的默认头像
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}
	// 控制器别名写法
	var S = this;
	$localStorage.name = '谢泽辉';
	S.name = $localStorage.name;
	console.log(S.name);
	S.goState = goState;
	init(); // 初始化
}]);