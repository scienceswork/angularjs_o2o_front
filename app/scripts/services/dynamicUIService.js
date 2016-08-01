'use strict';
/**
* webFrontApp Module
*
* dynamicUIService动态UI导航获取
*/
angular.module('webFrontApp')
.factory('dynamicUIService', ['haouHttp', function(haouHttp){
	function getDynamicUI() {
		return haouHttp.get("").success(function(response) {
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