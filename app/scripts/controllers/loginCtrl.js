/**
* webFrontApp Module
*
* login控制器
*/
angular.module('webFrontApp')
.controller('loginCtrl', ['$scope', 'haouHttp', function($scope, haouHttp){
	// 登陆按钮点击函数，传入表单数据
	function login(data) {
		console.log(data);
	}
	// 使用控制器别名的写法
	var S = this;
	S.name = '谢泽辉';
	S.login = login;
}])