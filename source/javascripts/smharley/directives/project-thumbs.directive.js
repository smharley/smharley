(function() {
  'use strict';

  angular.module('smharley').directive('projectThumbs', ['projects', projectThumbs]);

  function projectThumbs(projects) {
    return {
      templateUrl: 'project-thumb.html',
      link: link,
    };

    function link(scope) {
      projects.load().then(function(theProjects) {
        scope.projects = theProjects;
      });
    };
  };
})();

