'use strict';
/**
* webFrontApp Module
*
* profileFeedbackCtrl反馈页面控制器
*/
angular.module('webFrontApp')
.controller('profileFeedbackCtrl', ['$state', 'haouHttp', function($state, haouHttp){
	// 控制器初始化函数
	function init() {
		// 页面头部信息
		S.header = {
			'name': '吐槽几句',// 标题
			'showBack': true,// 显示后退按钮
			'goBack': function() {// 后退事件
				$state.go('help');
			}
		}
		S.feedback = {};
		S.feedbackSubmit = feedbackSubmit;
	}
	// 按钮点击事件
	function feedbackSubmit() {
		if (S.feedback.content && S.feedback.contact) {
			// 判断内容跟联系方式不为空，则触发提交事件
			S.feedback.title = '好友Store用户端意见反馈';// 意见反馈标题
			S.feedback.type = 1;// 信息类型
			var content = angular.toJson(S.feedback);// json序列化
			console.log(content);
			haouHttp.post('/saveOpinion', content).success(function(response) {
				// 提交成功后，清空反馈信息，并给出提示信息
				S.feedback.content = '';
				S.feedback.contact = '';
				alert('意见反馈成功，感谢您的反馈!');
			}).error(function(response) {
				alert(response.error || '未知错误');
			})
		}
	}
	var S = this;
	init(); // 初始化
}])