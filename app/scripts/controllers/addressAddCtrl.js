'use strict';
/**
 * addressAddCtrl添加地址控制器
 */
angular.module('webFrontApp')
  .controller('addressAddCtrl', ['$scope', '$state', function ($scope, $state) {
    // 控制器初始化函数
    function init() {
      S.header = {
        name: '修改地址',
        goBack: function () {
          $state.go('address');
        },
        rightEvent: function() {
          alert('保存成功');
        }
      }
    }

    var S = this;
    init();// 初始化
  }]);
