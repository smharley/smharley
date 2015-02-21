(function() {
  "use strict";

  angular.module('smharley').config(config);

  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/home.html',
      })
      .otherwise({
        templateUrl: '/pages/404',
        resolve: function() {
          return true;
        }
      });
  }
})();
