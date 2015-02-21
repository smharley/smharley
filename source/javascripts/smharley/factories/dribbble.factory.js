(function() {
  'use strict';

  angular.module('smharley').factory('dribbbles', dribbbles);

  function dribbbles($http, $q) {
    var shots;

    return {
      load: load,
    };

    function load() {
      var deferred = $q.defer();

      if (shots) {
        deferred.resolve(shots);
      } else {
        fetchDribbbles(deferred);
      }

      return deferred.promise;
    }

    function fetchDribbbles(deferred, clientId) {
      $http.jsonp('https://api.dribbble.com/v1/users/smharley/shots?access_token=5b7cecbb97a1d8cf434e72f5b276cc9eb46c22eaa08335e46cde1b9858c9dfd3&callback=JSON_CALLBACK')
      .then(function(response) {
        shots = response.data;
        deferred.resolve(shots);
      });
    }
  }
})();
