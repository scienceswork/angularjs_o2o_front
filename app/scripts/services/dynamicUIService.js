'use strict';
/**
* webFrontApp Module
*
* dynamicUIService动态UI导航获取
* 动态UI导航地址:v1/haou/dynamicUI，返回的json数据见api/vi/haou/dynamicUI.json
* v1表示第一个版本
*/
angular.module('webFrontApp')
.factory('dynamicUIService', ['haouHttp', function(haouHttp){
	function getDynamicUI() {
		return haouHttp.get("api/v1/haou/dynamicUI.json").success(function(response) {
			return response;
		}).error(function(response) {
			return response;
		});
	}
	var homeUI = {
		'getDynamicUI': getDynamicUI
	};
	return homeUI;
}]);