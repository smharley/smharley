(function() {
  'use strict';

  angular.module('smharley').factory('blogs', blogs);

  function blogs($http, $q) {
    var articles;

    return {
      load: load,
    };

    function load() {
      var deferred = $q.defer();

      if (articles) {
        deferred.resolve(articles);
      } else {
        fetchBlogs(deferred);
      }

      return deferred.promise;
    }

    function fetchBlogs(deferred) {
      articles = [
        {
          author: 'Steven Harley',
          date: 'December 19, 2014',
          link: 'https://robots.thoughtbot.com/using-expressions-in-after-effects',
          tags: [
              'design',
              'animation',
              'after effects'
          ],
          title: 'Using Expressions in After Effects',
        },
       {
          author: 'Steven Harley',
          date: 'November 05, 2014',
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'sass',
              'bourbon',
              'svg'
          ],
          title: 'SVG Animations',
        },
       {
          author: 'Steven Harley',
          date: 'August 18, 2014',
          link: 'https://robots.thoughtbot.com/building-ralph-in-svg',
          tags: [
              'design',
              'svg',
          ],
          title: 'Building Ralph with SVG',
        }];
      deferred.resolve(articles);
    };
  }
})();
