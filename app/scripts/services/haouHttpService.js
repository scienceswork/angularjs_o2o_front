'use strict';
/**
* webFrontApp Module
*
* haouHttp service封装，封装了ajax的get、post、put和patch
*/
angular.module('webFrontApp')
.factory('haouHttp', ['$http', function($http){
	// get方法
	function get(option) {
		return $http.get("" + apiUrl + option);
	}
	// post方法
	function post(option, data) {
		return $http.post("" + apiUrl + option, data);
	}
	// 接口API地址http://m.haoustore.com/api/
	var apiUrl = 'http://localhost:9000/';
	var haouHttp = {
		'get': get,
		'post': post
	};
	return haouHttp;
}]);