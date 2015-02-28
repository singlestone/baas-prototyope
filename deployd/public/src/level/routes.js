(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/level', {
        controller: 'LevelListCtrl',
        controllerAs: 'level',
        templateUrl: 'src/level/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          levels: Levels
        }
      })
      .when('/level/add', {
        controller: 'LevelEditCtrl',
        controllerAs: 'level',
        templateUrl: 'src/level/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          level: function() { return; }
        }
      })
      .when('/level/:id', {
        controller: 'LevelViewCtrl',
        controllerAs: 'level',
        templateUrl: 'src/level/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          level: GetLevel
        }
      })
      .when('/level/:id/edit', {
        controller: 'LevelEditCtrl',
        controllerAs: 'level',
        templateUrl: 'src/level/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          level: GetLevel,
        }
      });

    GetLevel.$inject = ['Level', '$route'];
    function GetLevel(Level, $route) {
      return Level.get($route.current.params.id);
    }

    Levels.$inject = ['Level'];
    function Levels(Level) {
      return Level.search();
    }
  }
})();