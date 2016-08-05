'use strict';
/**
* webFrontApp Module
*
* OAuthConfig OAuth2认证配置
*/
angular.module('webFrontApp')
.config(['OAuthProvider',function(OAuthProvider) {
	OAuthProvider.configure({
		'baseUrl': 'http://localhost/index.php',
		'clientId': 'NO',
		'clientSecret': null,
		'grantPath': 'Index/index',
		'revokePath': 'auth/revoke'
	});
}])