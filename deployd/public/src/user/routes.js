(function () {
  'use strict';

  angular.module('talentd')
    .config(Routes);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/user', {
        controller: 'UserListCtrl',
        controllerAs: 'user',
        templateUrl: 'src/user/list.html',
        data: {
          authRequired: true
        },
        resolve: {
          users: function(User) {
            return User.search();
          }
        }
      })
      .when('/user/add', {
        controller: 'UserCtrl',
        controllerAs: 'user',
        templateUrl: 'src/user/user.html',
        data: {
          authRequired: true
        },
        resolve: {
          roles: function(Role) {
            return Role.search();
          },
          user: function() {
            return;
          }
        }
      })
      .when('/user/:id', {
        controller: 'UserCtrl',
        controllerAs: 'user',
        templateUrl: 'src/user/user.html',
        data: {
          authRequired: true
        },
        resolve: {
          roles: function(Role) {
            return Role.search();
          },
          user: function(User, $route) {
            return User.get($route.current.params.id)
          }
        }
      });
  }
})();