'use strict';

var app = angular.module('MyApp');

app.controller('mainCtrl', function($scope, $http) {
  $scope.newTodo = {};
  $scope.keys = Object.keys;

  $http.get('/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.addTodo = function() {
    $http.post('/todos', $scope.newTodo)
      .success(function(data) {
        $scope.newTodo = {};
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTodo = function(id) {
    $http.delete('/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ', + data);
      });
  }
});