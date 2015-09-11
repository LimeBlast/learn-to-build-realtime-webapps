'use strict';

/* global app:true */

app.factory('Post', function ($resource) {
  return $resource('https://limeblast-thinkster.firebaseio.com/posts/:id.json');
});
