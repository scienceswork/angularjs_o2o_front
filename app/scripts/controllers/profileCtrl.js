'use strict';
/**
* webFrontApp Module
*
* profileCtrl 个人中心控制器
*/
angular.module('webFrontApp')
.controller('profileCtrl', ['$scope', '$state', 'haouHttp', '$localStorage', '$sessionStorage', 'ngDialog', function($scope, $state, haouHttp, $localStorage, $sessionStorage, ngDialog) {
	// 控制器初始化函数
	function init() {
		S.footerStatus = 'profile';
		S.profile = {};
		S.profile.phone = '15113992194';// 测试
		S.profile.name = '谢泽辉';
		S.ifProfile = true; // 个人中心导航标志
		S.profile.balances = '0.00'; // 默认余额为0
		S.isLogin = !!$localStorage.token; // 是否登陆
		S.isLogin = true;
		S.goState = goState; // 页面跳转
		S.ifbind = ifbind; // 解绑手机、绑定手机、修改密码
		S.defaultGravatar = 'http://localhost:9000/images/miaomiao.jpeg'; // 没有登录时候的默认头像
		delete $localStorage.name;
		getCredits();// 获取积分
		S.header = { // 头部对象，放置点击个人信息跳转的页面
			'rightEvent': function() {
				// 右边个人信息按钮点击事件
				if (S.isLogin) {
					// 如果登录的话，显示个人信息 
					goState('setting', {
						// 头像信息
						'img': S.profile.gravatar && 'null' !== S.profile.gravatar ? S.profile.gravatar : S.defaultGravatar,
						// 名字信息
						'name': S.profile.name,
						// 电话信息
						'phone': S.profile.phone,
						// 是否验证密码
						'password': S.profile.password
					});
				} else {
					// 未登陆跳转到登陆页面
					goState('login');
				}
			}
		};
		$localStorage.token = 1111;
		// 获取个人信息，每次点击个人信息页面都会发送一次get请求
		if ($localStorage.token) {
			// 判断token不为空，则表示已经登录，获取个人信息
			haouHttp.get('api/v1/user/current.json').success(function(response) {
				S.profile = response.data;
				getCredits();// 获取积分信息
				console.log('success');
			}).error(function(response) {
				// console.log('error');
				if (response.code === 401) {
					// 判断状态码，若为401则重新登录
					$state.go('login');
				} else {
					alert(response.error);
				}
			})
			console.log(S.profile);
		}
	}
	// 按钮点击跳转
	function goState(state, params) {
		$state.go(state, params);// 第二个参数为URL传入的参数
	}
	// 获取积分API数据
	function getCredits() {
		haouHttp.get('api/v1/integral/getCredits.json').success(function(response) {
			S.profile.credits = response.data.credits;
			// console.log(S.profile.credits);
		}).error(function(response) {
			alert(response.error);
		});
	}
	// 是否绑定手机
	function ifbind(option) {
		if (S.isLogin) {
			// 已经登陆，判断是修改密码还是解绑手机
			if (option) {
				// 修改密码,跳转到修改密码页面
				goState('changePassword');
			} else {
				// 非修改密码，即绑定手机或者解绑手机
				if (S.profile.phone) {
					// 存在手机号码即解绑
					S.profile.phone && goState('unbindPhone', {
						'phone': S.profile.phone
					})
				} else {
					// 不存在手机号码即绑定手机号码，跳转到绑定手机页面
					goState('bindPhone');
				}
			}
		} else {
			// 未登陆则跳转到登陆页面
			goState('login');
		}
	}
	// 控制器别名写法
	var S = this;
	$localStorage.name = '谢泽辉';
	// delete $localStorage;
	S.name = $localStorage.name;
	$sessionStorage.name = 'haou';
	// console.log($localStorage);
	init(); // 初始化
	console.log(S.profile);
	// console.log('profile');
	// console.log(S.profile);
}]);