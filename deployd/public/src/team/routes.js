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
          teams: Teams,
          consultants: Consultants
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
          consultants: Consultants,
          teams: Teams,
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
          team: GetTeam,
          consultants: Consultants,
          teams: Teams
        }
      });

    GetTeam.$inject = ['Team', '$route'];
    function GetTeam(Team, $route) {
      return Team.get($route.current.params.id);
    }

    Consultants.$inject = ['Consultant'];
    function Consultants(Consultant) {
      return Consultant.search();
    }

    Teams.$inject = ['Team'];
    function Teams(Team) {
      return Team.search();
    }
  }
})();