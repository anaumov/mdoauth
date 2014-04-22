'use strict';

angular.module('mdoauthApp')
  .controller('LoginController', function ($scope, $http, invalidField) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.authUser = function(){
      //$http.post("http://54.187.121.231:3000/v1/login", $scope.user, {}
      //).success(function(data, status, headers, config) {
      // render success message and redirect back
      //}).error(function(data, status, headers, config) {
      //  parse messages and add errors to form
      //});
    }

    $scope.invalidField = function(field){
      return invalidField(field);
    }
  });
