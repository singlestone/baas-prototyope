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
        controller: 'ProjectAddCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/project/add.html',
        data: {
          // authRequired: true
        },
        resolve: {
          clients: Clients,
          statuses: Statuses
        }
      })
      .when('/project/:id', {
        controller: 'ProjectViewCtrl',
        controllerAs: 'proj',
        templateUrl: 'src/projet/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          projet: GetProject
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
          project: GetProject
        }
      });

    GetProject.$inject = ['Project', '$route'];
    function GetProject(Project, $route) {
      return Projects.get($route.current.params.id);
    }

    Projects.$inject = ['Project'];
    function Projects(Project) {
      return Projects.search();
    }

    Clients.$inject = ['Client'];
    function Clients(Client) {
      return Client.search();
    }

    function Statuses() {
      return ['Proposal', 'SoW', 'In Delivery', 'Complete'];
    }
  }
})();