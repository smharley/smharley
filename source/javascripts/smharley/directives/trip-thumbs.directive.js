(function() {
  'use strict';

  angular.module('smharley').directive('tripThumbs', ['trips', tripThumbs]);

  function tripThumbs(trips) {
    return {
      templateUrl: 'trip-thumb.html',
      link: link,
    };

    function link(scope) {
      trips.load().then(function(theTrips) {
        scope.trips = theTrips;
      });
    };
  };
})();
