'use strict';
/**
* webFrontApp Module
*
* OAuthConfig OAuth2认证配置
*/
angular.module('webFrontApp')
.config(['OAuthProvider',function(OAuthProvider) {
	OAuthProvider.config({
		baseUrl: 'http://localhost:9000/api/v1/'
	});
}])