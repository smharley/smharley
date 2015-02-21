(function() {
  'use strict';

  angular.module('smharley').directive('blogPosts', ['blogs', blogPosts]);

  function blogPosts(blogs) {
    return {
      templateUrl: 'blog-post.html',
      link: link,
    };

    function link(scope) {
      blogs.load().then(function(theBlogs) {
        scope.posts = theBlogs;
      });
    };
  };
})();

