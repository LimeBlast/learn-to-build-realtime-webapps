'use strict';

app.controller('PostsCtrl', ['$scope', '$location', 'Auth', 'Post', function ($scope, $location, Auth, Post) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;

  $scope.post = {url: 'http://'};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
}]);
