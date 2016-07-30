/**
* webFrontApp Ui-route Module
* Angularjs 路由配置项
*/
angular.module('webFrontApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // 首页
    .state('home', {
    	url: '/',
    	templateUrl: './views/main.html',
    	controller: ''
    })
    // 测试条转页面
    .state('h', {
        url: '/h',
        templateUrl: './views/about.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
    });
    // 如果没有匹配到路由则条转到首页，无404页面
    $urlRouterProvider.otherwise('/');
}])