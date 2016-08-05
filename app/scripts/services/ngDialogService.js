'use strict';
/**
* webFrontApp Module
*
* ngDialogService 弹出框服务
*/
angular.module('webFrontApp')
.factory('ngDialogService', ['ngDialog', function(ngDialog){
	// 打开模版模态框
	function openTemplate(template, className, scope, closeByDocument) {
		// 判断className是不是空，如果为空则设置为默认样式
		var className = className ? className : 'null';
		ngDialog.oepn({

			'tempalte': template,
			'className': className,
			'scope': scope,
			'closeByDocument': closeByDocument,
			'overlay': false
		});
	}
	// 打开信息模态框
	function openMsg(message) {
		ngDialog.open({
			'template': '<p>' + message + '</p>',
			'className': 'null',// 样式待定
			'plain': true // 表示纯文字模版
		});
	}
	// 打开警告模态框，传入警告信息和页面scope
	function openAlert(message, scope) {
		scope.msg = message;
		ngDialog.open({
			'template': './views/modal/modal-alert.html',
			'className': 'null',// 样式待定
			'scope': scope,
			'closeByDocument': true // 点击其他背景的时候关闭模态框
		});
	}
	var dialog = {
		'openTemplate': openTemplate,
		'openMsg': openMsg,
		'openAlert': openAlert,
		'open': ngDialog.open,
		'closeAll': ngDialog.closeAll
	};
	return dialog;
}])