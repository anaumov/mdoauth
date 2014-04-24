'use strict';

angular.module('mdoauthApp')
  .controller('LoginController', function ($scope, $http, invalidField, parseFormErrors) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.authUser = function(){
      $scope.user.errors = {};

      $http({
        method: "POST",
        url: "http://54.187.121.231:3000/v1/auth/login",
        data: $scope.user,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status, headers, config) {
        console.log(data);
      }).error(function(data, status, headers, config) {

        if (status == 401) {
          $scope.user.errors.general = data;
        } else {
          $scope.user.errors = parseFormErrors(data);
        }
      });
    };

    $scope.invalidField = function(field){
      return invalidField(field);
    }
  });
