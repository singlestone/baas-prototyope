(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/client', {
        controller: 'ClientListCtrl',
        controllerAs: 'client',
        templateUrl: 'src/client/list.html',
        data: {
          // authRequired: true
        },
        resolve: {
          clients: Clients
        }
      })
      .when('/client/add', {
        controller: 'ClientEditCtrl',
        controllerAs: 'client',
        templateUrl: 'src/client/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          client: function() { return; }
        }
      })
      .when('/client/:id', {
        controller: 'ClientViewCtrl',
        controllerAs: 'client',
        templateUrl: 'src/client/view.html',
        data: {
          // authRequired: true
        },
        resolve: {
          client: GetClient
        }
      })
      .when('/client/:id/edit', {
        controller: 'ClientEditCtrl',
        controllerAs: 'client',
        templateUrl: 'src/client/edit.html',
        data: {
          // authRequired: true
        },
        resolve: {
          client: EditClient
        }
      });

    Clients.$inject = ['Client'];
    function Clients(Client) {
      return Client.search({ loadRelations: true });
    }

    GetClient.$inject = ['Client', '$route'];
    function GetClient(Client, $route) {
      return Client.get($route.current.params.id, { loadRelations: true });
    }

    EditClient.$inject = ['Client', '$route'];
    function EditClient(Client, $route) {
      return Client.get($route.current.params.id);
    }
  }
})();