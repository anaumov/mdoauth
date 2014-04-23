'use strict';

angular.module('mdoauthApp')
  .controller('RegistrationController', function ($scope, $http, invalidField) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.registerUser = function(){
      $scope.user.errors = {};

      //$http.post("http://54.187.121.231:3000/v1/registration", $scope.user, {}
      //).success(function(data, status, headers, config) {
        // render success message and redirect back
      //}).error(function(data, status, headers, config) {
        var errors = {};
        data.forEach(function(el, index, array){
          if (errors[el["Field"]]){
            errors[el["Field"]] += ". " + el['Tmpl'];
          } else {
            errors[el["Field"]] = el['Tmpl'];
          };
        });

        $scope.user.errors = errors;
      //});

    $scope.invalidField = function(field){
      return invalidField(field);
    }
  });