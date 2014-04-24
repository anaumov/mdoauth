'use strict';

var mdoauthApp = angular
  .module('mdoauthApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

mdoauthApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

mdoauthApp.config(['$httpProvider', function($httpProvider) {
   $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  }
]);

mdoauthApp.factory('invalidField', [function(field){
  return function(field){
    return (field.$dirty && field.$invalid)};
}]);

mdoauthApp.factory('parseFormErrors', [function(data){
  return function(data) {
    var errors = {};
    data.forEach(function (el, index, array) {
      if (errors[el["Field"]]) {
        errors[el["Field"]] += ". " + el['Tmpl'];
      } else {
        errors[el["Field"]] = el['Tmpl'];
      }
    });

    return errors;
  }
}]);
