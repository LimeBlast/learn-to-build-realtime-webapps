'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {
  $scope.posts = Post.all;

  $scope.post = {url: 'http://'};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
    });
  };

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
});
