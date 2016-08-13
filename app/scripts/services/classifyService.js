'use strict';
/**
 * classifyService获取首页分类数据
 * 分类数据地址:v1/haou/dynamicClassify，返回的json数据见api/vi/haou/dynamicClassify.json
 * v1表示第一个版本
 */
angular.module('webFrontApp')
.factory('classifyService', ['haouHttp', function(haouHttp) {
  function getClassify() {
    return haouHttp.get('api/v1/haou/dynamicClassify.json').success(function(response) {
      return response;
    }).error(function(response) {
      return response;
    })
  }
  var classify = {
    getClassify: getClassify
  };
  return classify;
}]);
