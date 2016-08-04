'use strict';
/**
* webFrontApp Module
*
* profileSettingCtrl 个人信息控制器
*/
angular.module('webFrontApp')
.controller('profileSettingCtrl', ['$scope', '$state', '$stateParams', '$localStorage', function($scope, $state, $stateParams, $localStorage){
	// 控制器初始化函数
	function init() {
		S.header = {
			name: '个人信息',// 头部名称
			goBack: function() { // 后退
				$state.go('profile');
			}
		}
		// 用户头像
		S.img = decodeURIComponent($stateParams.img);
		// 用户名
		S.name = $stateParams.name;
		// 用户手机号码
		S.phone = $stateParams.phone;
		S.logout = function() {
			// 退出登陆，即删除Token，然后跳转到主页
			delete $localStorage.token;
			$state.go('home');
		}
	}
	// 控制器别名写法
	var S = this;
	init(); // 初始化
}])