'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = Post.all;

  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
});
