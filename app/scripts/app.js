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
    'ui.router',
    'ngStorage',
    'angular-oauth2',
    'ngDialog',
    'angular-carousel'
  ])
  // 首页控制器
  .controller('MasterCtrl', ['$scope', 'haouHttp', 'dynamicUIService', function ($scope, haouHttp, dynamicUIService) {
    // 初始化函数
    function init() {
      getDynamicUI();
    }

    // 获取底部导航UI的远程json数据
    function getDynamicUI() {
      dynamicUIService.getDynamicUI().success(function (response) {
        S.dynamicUIDetails = response.data.dynamicUIDetails;
      }).error(function (response) {
        // 错误不进行任何操作
        console.log('error');
        alert(response.error);
      });
    }

    // 使用控制器别名的写法
    var S = this;
    S.name = '谢泽辉';
    init();
  }]);










