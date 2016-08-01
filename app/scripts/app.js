'use strict';

/**
 * @ngdoc overview
 * @name webFrontApp
 * @description
 * # webFrontApp
 *
 * Main module of the application.
 */
angular.module('webFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
// 首页控制器
.controller('MasterCtrl', ['$scope', 'haouHttp', 'dynamicUIService', function($scope, haouHttp, dynamicUIService) {
	// 初始化函数
	// function init() {
	// 	// 底部导航切换标记，设置为首页
	// 	S.isHome = true;
	// }
	// // 使用控制器别名的写法
	// var S = this;
	// S.name = '谢泽辉';
	// init();
}])