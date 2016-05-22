'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  $( window ).ready(function() {
    alert("Loaded");
  });

  $(window).bind("beforeunload", function() {
    return confirm("Do you really want to close?");
  })
}]);