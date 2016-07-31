/**
* webFrontApp Module
*
* homeService
*/
angular.module('webFrontApp')
.factory('homeService', ['haouHttp', function(haouHttp){
	function getHomeUI() {
		return haouHttp.get("").success(function(response) {
			return response;
		}).error(function(response) {
			return response;
		});
	}
	var homeUI = {
		'getHomeUI': getHomeUI
	};
	return homeUI;
}])