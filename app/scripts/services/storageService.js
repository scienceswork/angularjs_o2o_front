'use strict';
/**
* webFrontApp Module
*
* storageService 存储服务
*/
angular.module('webFrontApp')
.factory('storageService', ['$localStorage', '$sessionStorage', function($localStorage, $sessionStorage){
	// 传入参数为需要删除的键值名，如果不是空的，就删除$localStorage和$sessionStorage中存储的值
	function deleteStorageValue(storageKey) {
		if (storageKey) {
			delete $localStorage[storageKey];
			delete $sessionStorage[storageKey];
		}
	}
	// null
	function coordinate() {
		return null;
	}
	// 设置location
	function location(objectValue) {
		if (objectValue) {
			// 如果非空，则表示设置字段
			$localStorage.location = objectValue;
		} else {
			// 如果为空，则表示取出字段值
			return $localStorage.location = {};
		}
	}
	// haou官网购物车
	function haouCart(haouCart) {
		if (haoucart) {
			// 如果非空，则表示设置购物车
			$localStorage.haouCart = haoucart;
		} else {
			// 如果为空，则表示取出字段值
			return $localStorage.haoucart;
		}
	}
	// openId
	function openId(objectValue) {
		if (objectValue) {
			$localStorage.openId = objectValue;
		} else {
			return $localStorage.openId;
		}
	}
	var S = {
		'delete': deleteStorageValue,
		'coordinate': coordinate,
		'location': location,
		'openId': openId
	};
	return S;
}])