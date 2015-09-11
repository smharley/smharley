(function() {
  'use strict';

  angular.module('smharley').directive('tripShow', ['trips', '$window', tripShow]);

  function tripShow(trips, $window) {
    return {
      link: link,
    };

    function link(scope) {
      trips.load().then(function(theTrips) {
        scope.trips = theTrips;
        var url = $window.location.href.split('/').pop();

        angular.forEach(theTrips, function(trip) {
          if (trip.slug === url) {
            scope.trip = trip;
            var trip_date = moment(trip.date).format('MMMM D, YYYY');
            scope.trip_date_formatted = trip_date;

            var thisTrip = trip.id;
            scope.nextTrip = thisTrip + 1;
          }
        });
      });
    };
  };
})();
