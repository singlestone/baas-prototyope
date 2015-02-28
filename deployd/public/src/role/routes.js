(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/role', {
        controller: 'RoleListCtrl',
        controllerAs: 'role',
        templateUrl: 'src/role/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          roles: Roles
        }
      })
      .when('/role/add', {
        controller: 'RoleEditCtrl',
        controllerAs: 'role',
        templateUrl: 'src/role/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          role: function() { return; }
        }
      })
      .when('/role/:id', {
        controller: 'RoleViewCtrl',
        controllerAs: 'role',
        templateUrl: 'src/role/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          role: GetRole
        }
      })
      .when('/role/:id/edit', {
        controller: 'RoleEditCtrl',
        controllerAs: 'role',
        templateUrl: 'src/role/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          role: EditRole
        }
      });

    Roles.$inject = ['Role'];
    function Roles(Role) {
      return Role.search({ loadRelations: true });
    }

    GetRole.$inject = ['Role', '$route'];
    function GetRole(Role, $route) {
      return Role.get($route.current.params.id, { loadRelations: true });
    }

    EditRole.$inject = ['Role', '$route'];
    function EditRole(Role, $route) {
      return Role.get($route.current.params.id);
    }
  }
})();