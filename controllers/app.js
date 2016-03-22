var app = angular.module('', []);

app.controller('mainController', function($scope){
  $scope.items = [];
  $scope.newItem = {owned_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newItem.created_at = Date.now();
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
