'use strict';
/**
* webFrontApp Ui-route Module
* Angularjs 路由配置项
*/
angular.module('webFrontApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // 测试页面
    .state('test', {
        url: '/test',
        templateUrl: 'views/lactionCity.html',
        controller: 'testCtrl',
        controllerAs: 'vm'
    })
    // 首页
    .state('home', {
    	url: '/',
    	templateUrl: 'views/haou/home/home.html',
    	controller: 'haouHomeCtrl',
        controllerAs: 'vm',
        data: {
             permission: "HAOU.HOME"
        }
    })
    // 好友店店铺列表
    .state('stores', {
        url: '/stores',
        templateUrl: 'views/stores/stores.html',
        controller: 'storesCtrl',
        controllerAs: 'vm'
    })
    // 购物差
    .state('orders', {
        url: '/carts',
        templateUrl: 'views/carts/carts.html',
        controller: 'cartsCtrl',
        controllerAs: 'vm'
    })
    // 个人中心
    .state('profile', {
    	url: '/profile',
    	templateUrl: 'views/profile/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
    })
    // 个人信息，传入参数待定
    .state('setting', {
        url: '/setting?img&name&phone&password',
        templateUrl: 'views/profile/setting/setting.html',
        controller: 'profileSettingCtrl',
        controllerAs: 'vm'
    })
    // 解绑手机，传入参数手机phone
    .state('unbindPhone', {
        url: '/unbindPhone?phone',
        templateUrl: 'views/profile/unbindPhone/unbindPhone.html',
        controller: 'profileUnbindPhoneCtrl',
        controllerAs: 'vm'
    })
    // 余额，传入参数余额amount,非负数字
    .state('wallet', {
        url: '/wallet?amount',
        templateUrl: 'views/profile/wallet/wallet.html',
        controller: 'walletCtrl',
        controllerAs: 'vm'
    })
    // 修改密码
    .state('changePassword', {
        url: '/changePassword',
        templateUrl: 'views/profile/changePassword/changePassword.html'
    })
    // 放置haou店铺相关的全部路由，嵌套
    .state('haou', {
    	url: '/haou',
    	template: '<div ui-view class="haou-container"></div>'
    })
    // haou官方自营店列表
    .state('haou.stores', {
    	url: '/stores',
    	templateUrl: 'haou官方自营店列表'
    })
    // haou官方自营店详细信息，传入参数店铺ID
    .state('haou.storeInfo', {
    	url: '/storeInfo?id',
    	template: 'haou官方自营店详细信息'
    })
    // haou官方下单
    .state('haou.seckillComfirm', {
    	url: '/seckillComfirm',
    	template: 'haou官方下单'
    })
    // haou官方订单
    .state('haou.orders', {
    	url: '/orders',
    	template: 'haou官方订单'
    })
    // haou官方物流
    .state('haou.logistics', {
    	url: '/logistics',
    	template: 'haou官方物流'
    })
    // haou官网店商品列表
    .state('haou.items', {
    	url: '/store?id',
    	template: 'haou官网店商品列表'
    })
    // haou官网店商品信息
    .state('haou.itemInfo', {
    	url: '/itemInfo',
    	template: 'haou官网店商品信息'
    })
    // haou官网店商品图文信息
    .state('haou.itemDetail', {
    	url: '/itemDetail',
    	template: 'haou官网店商品图文信息'
    })
    // haou官网商品支付页面
    .state('haou.comfirmOrder', {
    	url: '/comfirmOrder',
    	template: 'haou官网商品支付页面'
    })
    // haou官网购物车
    .state('haou.cart', {
    	url: '/cart',
    	template: 'haou官网购物车'
    })
    // haou官网店收货地址列表管理
    .state('haou.addresses', {
    	url: '/addresses',
    	template: 'haou官网店收货地址列表管理'
    })
    // haou官网店收货地址详情
    .state('haou.address', {
    	url: '/address',
    	template: 'haou官网店收货地址详情'
    })
    // 登陆
    .state('login', {
    	url: '/login',
    	templateUrl: 'views/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
    })
    // 找回密码
    .state('findPassword', {
        url: '/findPassword',
        templateUrl: 'views/login/findPassword/findPassword.html'
    })
    // 注册
    .state('register', {
    	url: '/register',
    	template: '注册'
    })
    // 关于好友Store
    .state('about', {
    	url: '/about',
    	template: '关于好友Store<i class="fa fa-map-marker"></i>链接'
    })
    // 帮助中心
    .state('help', {
    	url: '/help',
    	templateUrl: 'views/profile/help/help.html',
        controller: 'profileHelpCtrl',
        controllerAs: 'vm'
    })
    // 意见反馈
    .state('feedback', {
        url: '/feedback',
        templateUrl: 'views/profile/feedback/feedback.html',
        controller: 'profileFeedbackCtrl',
        controllerAs: 'vm'
    })
    // 常见问题
    .state('faq', {
        url: '/faq',
        templateUrl: 'views/profile/faq/faq.html'
    })
    // 提现，传入参数提现额度amount,非负数字，不得大于余额的数目
    .state('withdrawal', {
    	url: '/withdrawal?amount',
    	template: '这里是提现'
    })
    // 积分，传入参数积分number，非负数字，整数
    .state('points', {
    	url: '/points?number',
    	template: '这里是积分'
    })
   	// 红包
   	.state('bonus', {
   		url: '/bonus',
   		template: '这里是红包'
   	})
   	// 退款订单
   	.state('haverefund', {
   		url: '/haverefund',
   		template: '这里是退款订单'
   	})
    // 我要开店
    .state('openStore', {
    	url: '/openStore',
    	template: '这里是我要开店'
    })
    // 测试条转页面
    .state('h', {
        url: '/h',
        templateUrl: 'views/about.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
    });
    // 如果没有匹配到路由则条转到首页，无404页面，错误页面重定向
    $urlRouterProvider.otherwise('/');
}]);
















