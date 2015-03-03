(function() {
  'use strict';

  angular.module('smharley').factory('projects', projects);

  function projects($http, $q) {
    var projects;

    return {
      load: load,
    };

    function load() {
      var deferred = $q.defer();

      if (projects) {
        deferred.resolve(projects);
      } else {
        fetchProjects(deferred);
      }

      return deferred.promise;
    }

    function fetchProjects(deferred) {
      projects = [
        {
          link: 'https://robots.thoughtbot.com/using-expressions-in-after-effects',
          tags: [
              'art direction',
              'angularJS',
              'ruby on rails'
          ],
          thumbnail: 'jenny/jenny-thumb.png',
          title: 'Jen Harley\'s Portfolio',
        },
       {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'html/css',
              'visual design',
          ],
          thumbnail: 'day-of-the-shirt/day-of-the-shirt-thumb.png',
          title: 'Day of the Shirt',
        },
       {
          link: 'https://robots.thoughtbot.com/building-ralph-in-svg',
          tags: [
              'web design',
              'branding',
              'html/css',
          ],
          thumbnail: 'supplybetter/supplybetter-thumb.png',
          title: 'SupplyBetter',
       },
       {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'web design',
              'visual design',
              'mobile'
          ],
          thumbnail: 'gopro/gopro-thumb.png',
          title: 'GoPro',
        },
        {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'branding',
              'web design',
              'html/css'
          ],
          thumbnail: 'hackreactor/hackreactor-thumb.png',
          title: 'Hack Reactor',
        },
        {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'product design',
              'mobile',
          ],
          thumbnail: 'ravel/ravel-thumb.png',
          title: 'Ravel',
        }];
      deferred.resolve(projects);
    };
  }
})();
