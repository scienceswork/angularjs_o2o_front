'use strict';
/**
 * addressCtrl地址控制器
 */
angular.module('webFrontApp')
  .controller('addressCtrl', ['$scope', '$state', function ($scope, $state) {
    // 控制器初始化
    function init() {
      S.header = {
        name: '地址管理',
        goBack: function () {
          $state.go('profile');
        },
        rightEvent: function () {
          $state.go('addressAdd');
        }
      };
    }

    var S = this;
    init(); // 初始化
  }]);
