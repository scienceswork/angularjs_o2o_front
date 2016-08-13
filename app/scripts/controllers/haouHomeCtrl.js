'use strict';
/**
* webFrontApp Module
*
* haoustore首页控制器
*/
angular.module('webFrontApp')
.controller('haouHomeCtrl', ['$scope', '$state', 'haouHttp', 'classifyService', function($scope, $state, haouHttp, classifyService){
	// 控制器初始化函数
	function init() {
		S.isHome = true;
    getClassify();
	}
	// 按钮点击跳转
	function goState(state) {
		$state.go(state);
	}
  // 获取分类数据
  function getClassify() {
    classifyService.getClassify().success(function(response) {
      S.classify = response.data.classify;
    }).error(function(response) {
      alert(response.error);
    });
  }
	var S = this;
	S.goState = goState;
	S.name = 'haouStore首页控制器';
	init(); // 初始化
}]);
