(function() {
  "use strict";

  angular.module('smharley').config(config);

  function config($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when('/', {
        templateUrl: '/home.html',
      })
      .when('/trips/:param', {
        templateUrl: '/trip-show.html',
      })
      .otherwise({
        templateUrl: '/pages/404',
        resolve: function() {
          return true;
        }
      });
  }
})();
