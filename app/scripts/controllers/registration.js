'use strict';

angular.module('mdoauthApp')
  .controller('RegistrationController', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.registerUser = function(){
      console.log($scope.user);
      $scope.errors = {};
      $http.post('http://127.0.0.1/v1/registration', $scope.user, {}
      ).success(function(data, status, headers, config) {
        // render success message or redirect
      }).error(function(data, status, headers, config) {
        $scope.errors.messages = data.join(', ');
      });
    }
  });
