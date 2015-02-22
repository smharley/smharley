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
          title: 'Jen Harley\'s Portfolio',
        },
       {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'html/css',
              'visual design',
          ],
          title: 'Day of the Shirt',
        },
       {
          link: 'https://robots.thoughtbot.com/building-ralph-in-svg',
          tags: [
              'web design',
              'branding',
              'html/css',
          ],
          title: 'SupplyBetter',
       },
       {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'web design',
              'visual design',
              'mobile'
          ],
          title: 'GoPro',
        },
        {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'branding',
              'web design',
              'html/css'
          ],
          title: 'Hack Reactor',
        },
        {
          link: 'https://robots.thoughtbot.com/svg-animations',
          tags: [
              'product design',
              'mobile',
          ],
          title: 'Ravel',
        }];
      deferred.resolve(projects);
    };
  }
})();
