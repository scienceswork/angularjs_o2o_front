'use strict';
/**
* webFrontApp Module
*
* profileHelpCtrl帮助中心控制器
*/
angular.module('webFrontApp')
.controller('profileHelpCtrl', ['$state', 'haouHttp', function($state, haouHttp){
	// 控制器初始化函数
	function init() {
		S.header = {
			// 页面头部header信息
			'name': '帮助中心',
			'showBack': true,
			'goBack': function() {
				$state.go('profile');
			}
		};
		getServicePhone();
	}
	// 获取客服电话号码
	function getServicePhone() {
		haouHttp.get('api/v1/haou/servicePhone.json').success(function(response) {
			S.servicePhone = response.data.phone;// 字符串显示形式
			S.phoneNum = S.servicePhone.split('-').join("");
		});
	}
	var S = this;
	init();// 初始化
}])