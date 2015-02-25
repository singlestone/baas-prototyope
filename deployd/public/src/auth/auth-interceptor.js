(function () {
  'use strict';

  angular.module('talentd')
    .factory('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];
  function AuthInterceptor($rootScope, $q, AUTH_EVENTS) {
    return {
      responseError: responseError
    };

    function responseError(response) { 
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }
  }

})();