(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/project', {
        controller: 'ProjectListCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/project/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          projects: Projects
        }
      })
      .when('/project/add', {
        controller: 'ProjectEditCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/project/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          statuses: Statuses,
          project: function() { return; }
        }
      })
      .when('/project/:id', {
        controller: 'ProjectViewCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/project/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          project: GetProject,
          utilization: Utilization
        }
      })
      .when('/project/:id/edit', {
        controller: 'ProjectEditCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/project/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          project: EditProject,
          statuses: Statuses
        }
      });

    GetProject.$inject = ['Project', '$route'];
    function GetProject(Project, $route) {
      return Project.get($route.current.params.id, { loadRelations: true } );
    }

    EditProject.$inject = ['Project', '$route'];
    function EditProject(Project, $route) {
      return Project.get($route.current.params.id);
    }

    Projects.$inject = ['Project'];
    function Projects(Project) {
      return Project.search({ loadRelations: true} );
    }

    Statuses.$inject = ['Project'];
    function Statuses(Project) {
      return Project.statuses();
    }

    Utilization.$inject = ['Utilization', '$route'];
    function Utilization(Utilization, $route) {
      return Utilization.search({ projectId: $route.current.params.id });
    }
  }
})();