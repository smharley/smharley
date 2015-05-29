(function() {
  'use strict';

  angular.module('smharley').directive('tripInfo', ['trips', '$routeParams', '$window', '$filter', tripInfo]);

  function tripInfo(trips, $routeParams, $window, $filter) {
    return {
      link: link,
    };

    function link(scope) {
      trips.load().then(function(theTrips) {
        var trips = theTrips;
        var result = $filter('filter')(theTrips, function (trip) { return trip.link === $routeParams.param; })[0];
        scope.trip = result;

        if (result == undefined) {
          $window.location.href = '/';
        }
      });
    };
  };
})();
