'use strict';

angular.module('mdoauthApp')
  .controller('RegistrationController', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.registerUser = function(){
      //$http.post("http://54.187.121.231:3000/v1/registration", $scope.user, {}
      //).success(function(data, status, headers, config) {
        // render success message and redirect back
      //}).error(function(data, status, headers, config) {
        //  parse messages and add errors to form
      //});
    }

    $scope.invalidField = function(field){
      return (field.$dirty && field.$invalid)
    }
  });
