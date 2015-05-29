(function() {
  'use strict';

  angular.module('smharley').factory('trips', trips);

  function trips($http, $q) {
    var trips;

    return {
      load: load,
    };

    function load() {
      var deferred = $q.defer();

      if (trips) {
        deferred.resolve(trips);
      } else {
        fetchTrips(deferred);
      }

      return deferred.promise;
    }

    function fetchTrips(deferred) {
      trips = [
        {
          date: '2015-03-14T09:00:00Z',
          link: '2015.03.14.mississippi-lake',
          thumbnail: 'jenny/jenny-thumb.png',
          subtitle: 'Henry W. Coe State Park',
          title: 'Mississippi Lake',
        },
        {
          date: '2015-04-04T09:00:00Z',
          link: '2015.04.04.snow-mountain',
          thumbnail: 'jenny/jenny-thumb.png',
          subtitle: 'Snow Mountain Wilderness',
          title: 'Waters Camp & Milk Ranch',
        },
        {
          date: '2015-05-02T09:00:00Z',
          link: '2015.05.02.boulder-creek-lakes',
          thumbnail: 'jenny/jenny-thumb.png',
          subtitle: 'Trinity Alps Wilderness',
          title: 'Boulder Creek Lakes',
        },
        {
          date: '2015-05-16T09:00:00Z',
          link: '2015.05.16.cone-peak',
          thumbnail: 'jenny/jenny-thumb.png',
          subtitle: 'Cone Peak & Goat Camp',
          title: 'Los Padres National Forest',
        }
      ];
      deferred.resolve(trips);
    };
  }
})();
