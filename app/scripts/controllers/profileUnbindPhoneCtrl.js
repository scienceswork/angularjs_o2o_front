'use strict';
/**
* webFrontApp Module
*
* profileUnbindPhoneCtrl 解绑手机控制器
*/
angular.module('webFrontApp')
.controller('profileUnbindPhoneCtrl', ['$scope', '$stateParams', '$window', 'graphicCodeService', 'ngDialogService', function($scope, $stateParams, $window, graphicCodeService, ngDialogService){
	// 控制器初始化
	function init() {
		S.header = {
			'name': '解绑手机', // 头部名称
			'showBack': true, // 是否显示后退按钮，为true
			'goBack': function() {
				// 因为有两个入口可以直接到达解绑手机页面，故使用浏览器历史记录进行后退
				$window.history.back();
			}
		};
		S.notGet = false;// 默认是没有发送验证码
		S.submitting = false;// 默认是没有点击解绑手机按钮
		S.phone = $stateParams.phone;// 接收URL传过来的手机电话号码
		S.getValidCode = getGraphicCode;// 获取验证码图片base64的json数据
		S.phoneData = { // 解绑手机数据
			'openId': 'null',
			'phone': S.phone
		};
		$scope.data = S.phoneData;// 向页面传递data数据
	}
	// 获取验证码图片
	function getGraphicCode() {
		return graphicCodeService.getGraphicCode().success(function(response) {
			// 使用base64处理过的图片数据
			S.image = 'data:image/png;base64,' + response.data.image;
			S.phoneData.voToken = response.data.token;
		}).error(function(response) {
			alert(response.error);
		});
	}
	var S = this;
	init();// 初始化
	getGraphicCode();
	console.log(S.phoneData);
}])