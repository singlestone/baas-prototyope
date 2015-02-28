(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/consultant', {
        controller: 'ConsultantListCtrl',
        controllerAs: 'con',
        templateUrl: 'src/consultant/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          consultants: Consultants
        }
      })
      .when('/consultant/add', {
        controller: 'ConsultantEditCtrl',
        controllerAs: 'con',
        templateUrl: 'src/consultant/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          roles: Roles,
          consultant: function() { return; }
        }
      })
      .when('/consultant/:id', {
        controller: 'ConsultantViewCtrl',
        controllerAs: 'con',
        templateUrl: 'src/consultant/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          consultant: GetConsultant
        }
      })
      .when('/consultant/:id/edit', {
        controller: 'ConsultantEditCtrl',
        controllerAs: 'con',
        templateUrl: 'src/consultant/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          consultant: EditConsultant,
          roles: Roles
        }
      });

    GetConsultant.$inject = ['Consultant', '$route'];
    function GetConsultant(Consultant, $route) {
      return Consultant.get($route.current.params.id, { loadRelations: true });
    }

    EditConsultant.$inject = ['Consultant', '$route'];
    function EditConsultant(Consultant, $route) {
      return Consultant.get($route.current.params.id);
    }

    Consultants.$inject = ['Consultant'];
    function Consultants(Consultant) {
      return Consultant.search({ loadRelations: true });
    }

    Roles.$inject = ['Role'];
    function Roles(Role) {
      return Role.search();
    }
  }
})();