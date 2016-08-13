'use strict';
/**
* webFrontApp Module
*
* rofileChangePasswordCtrl密码管理控制器
*/
angular.module('webFrontApp')
.controller('profileChangePasswordCtrl', ['haouHttp', '$state', '$window', function(haouHttp, $state, $window){
	// 控制器初始化函数
	function init() {
		// 页面头部信息
		S.header = {
			'name': '修改密码',
			'showBack': true,
			'goBack': function() {
				$window.history.back();
			}
		};
	}
	var S = this;
	init();// 初始化
}])
