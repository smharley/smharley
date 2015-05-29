(function() {
  'use strict';

  angular.module('smharley').directive('dribbbleThumbs', ['dribbbles', dribbbleThumbs]);

  function dribbbleThumbs(dribbbles) {
    return {
      templateUrl: 'dribbble-thumb.html',
      link: link,
    };

    function link(scope) {
      dribbbles.load().then(function(theShots) {
        scope.shots = theShots.data;
      });
    };
  };
})();
