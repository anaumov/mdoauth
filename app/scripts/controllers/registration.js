'use strict';

angular.module('mdoauthApp')
  .controller('RegistrationController', function ($scope, $http, invalidField, parseFormErrors) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.registerUser = function() {
      $scope.user.errors = {};

      $http({
        method: "POST",
        url: "http://54.187.121.231:3000/v1/registration",
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
    }

    $scope.invalidField = function(field){invalidField(field)};
  })