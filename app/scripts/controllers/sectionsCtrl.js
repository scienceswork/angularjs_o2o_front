'use strict';
angular.module('webFrontApp')
  .controller('sectionsCtrl', ['$scope', '$state', function ($scope, $state) {
    // 控制器初始化函数
    function init() {
      S.header = {
        name: '选择城市',
        goBack: function () {
          $state.go('stores');
        },
        rightEvent: function () {
          alert('点击搜索');
        }
      };
    }

    var S = this;
    init();// 初始化
  }]);
