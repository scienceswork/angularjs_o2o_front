'use strict';
/**
* webFrontApp Module
*
* graphicCodeService验证码服务
*/
angular.module('webFrontApp')
.factory('graphicCodeService', ['haouHttp', function(haouHttp){
	// 获取验证码图像
	function getGraphicCode() {
		return haouHttp.get('api/v1/user/getGraphicCode.json').success(function(response) {
			return response;
		}).error(function(response) {
			return response;
		});
	}
	// 验证短信验证码，使用post，传递手机号码
	function validSms(data) {
		return haouHttp.post('api/v1/user/validSms.json').success(function(response) {
			return response;
		}).error(function(response) {
			return response;
		});
	}
	var S = {
		'getGraphicCode': getGraphicCode,
		'validSms': validSms
	};
	return S;
}])