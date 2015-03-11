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
          tags: [
              'angularJS',
              'ruby on rails'
          ],
          thumbnail: 'jenny/jenny-thumb.png',
          title: 'Jen Harley\'s Portfolio',
        },
       {
          tags: [
              'html/css',
              'visual design',
          ],
          thumbnail: 'day-of-the-shirt/day-of-the-shirt-thumb.png',
          title: 'Day of the Shirt',
        },
       {
          tags: [
              'web design',
              'branding',
              'html/css',
          ],
          thumbnail: 'supplybetter/supplybetter-thumb.png',
          title: 'SupplyBetter',
       },
       {
          tags: [
              'web design',
              'visual design',
              'mobile'
          ],
          thumbnail: 'gopro/gopro-thumb.png',
          title: 'GoPro',
        },
        {
          tags: [
              'branding',
              'web design',
              'html/css'
          ],
          thumbnail: 'hackreactor/hackreactor-thumb.png',
          title: 'Hack Reactor',
        },
        {
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
