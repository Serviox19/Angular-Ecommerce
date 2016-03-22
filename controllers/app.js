var app = angular.module('garageSale', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //the home display
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});

app.controller('mainController', function($scope){
  $scope.items = [];
  $scope.newItem = {owned_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.items.push($scope.newItem);
    $scope.newItem = {_owner: '', itemName: '', description: '', price: '', sold: '', comments: []};
  };
});

app.controller('authController', function($scope){
  $scope.user = {username = '', password = ''};
  $scope.error_message = '';

  $scope.register = function(){

    $scope.error_message = 'registration request for ' + $scope.user.username;
  };

  $scope.login = function(){

    $scope.error_message = 'login request for ' + $scope.user.username;
  };

});
