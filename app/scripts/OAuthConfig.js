'use strict';
/**
* webFrontApp Module
*
* OAuthConfig OAuth2认证配置
*/
angular.module('webFrontApp')
.config(['OAuthProvider',function(OAuthProvider) {
	OAuthProvider.configure({
		'baseUrl': 'http://localhost/api/v1/',
		'clientId': 'NO',
		'clientSecret': null,
		'grantPath': 'oauth2/token',
		'revokePath': 'oauth2/revoke'
	});
}])