(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/team', {
        controller: 'TeamListCtrl',
        controllerAs: 'team',
        templateUrl: 'src/team/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          teams: Teams
        }
      })
      .when('/team/add', {
        controller: 'TeamEditCtrl',
        controllerAs: 'team',
        templateUrl: 'src/team/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          team: function() { return; }
        }
      })
      .when('/team/:id', {
        controller: 'TeamViewCtrl',
        controllerAs: 'team',
        templateUrl: 'src/team/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          team: GetTeam,
          teams: Teams
        }
      })
      .when('/team/:id/edit', {
        controller: 'TeamEditCtrl',
        controllerAs: 'team',
        templateUrl: 'src/team/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          team: EditTeam,
        }
      });

    GetTeam.$inject = ['Team', '$route'];
    function GetTeam(Team, $route) {
      return Team.get($route.current.params.id, { loadRelations: true } );
    }

    EditTeam.$inject = ['Team', '$route'];
    function EditTeam(Team, $route) {
      return Team.get($route.current.params.id);
    }

    Teams.$inject = ['Team'];
    function Teams(Team) {
      return Team.search({ loadRelations: true });
    }
  }
})();