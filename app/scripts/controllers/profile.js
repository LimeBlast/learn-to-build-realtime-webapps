'use strict';

app.controller('ProfileCtrl', ['$scope', '$routeParams', 'Profile', function ($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function (posts) {
    $scope.posts = posts;
  });
}]);
