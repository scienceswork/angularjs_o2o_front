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
	function post(option) {
		return $http.post("" + apiUrl + option);
	}
	// 接口API地址http://m.haoustore.com/api/
	var apiUrl = 'http://localhost:9000/testJson.json';
	var haouHttp = {
		'get': get
	};
	return haouHttp;
}]);