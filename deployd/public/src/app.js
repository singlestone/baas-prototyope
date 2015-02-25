(function () {
  'use strict';

  angular.module('talentd', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(Routes)
  .config(RegisterInterceptors)
  .run(RouteSecurity);

  Routes.$inject = ['$routeProvider']
  function Routes($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: 'src/home/home.html',
        data: {
          authRequired: true
        }
      })
      .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'login',
        templateUrl: 'src/auth/login.html'
      })
      .when('/403', {
        templateUrl: 'src/auth/403.html'
      });
  }

  RegisterInterceptors.$inject = ['$httpProvider'];
  function RegisterInterceptors($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  };

  RouteSecurity.$inject = ['$rootScope', '$location', 'Auth'];
  function RouteSecurity($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      var authorizedRoles = next.data ? next.data.authorizedRoles : null;
      var authRequired = next.data && next.data.authRequired;

      if (authRequired && !Auth.isAuthenticated()) {
        event.preventDefault();
        $location.path('/login');
      } else if (authorizedRoles && !Auth.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $location.path('/403');
      }
    });
  }
})();