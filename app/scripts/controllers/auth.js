'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth) {
  if (Auth.signedIn()) {
    $location.path('/');
  }

  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $location.path('/');
    });
  };

  $scope.register = function () {
    Auth.register($scope.user).then(function () {
      return Auth.login($scope.user).then(function () {
        $location.path('/');
      });
    });
  };
});
