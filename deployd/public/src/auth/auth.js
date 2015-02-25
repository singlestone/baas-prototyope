(function () {
  'use strict';

  angular.module('talentd')
    .factory('Auth', AuthService);


  AuthService.$inject = ['$http', '$rootScope', '$q', 'Session'];
  function AuthService($http, $rootScope, $q, Session) {
    var svc = {
      login: login,
      currentUser: currentUser,
      isAuthenticated: isAuthenticated,
      isAuthorized: isAuthorized
    };

    return svc;

    function login(credentials) {
      var deferred = $q.defer();
      dpd.users.login(credentials)
        .then(createSession, deferred.reject)
        .then(fetchUser, deferred.reject)
        .then(deferred.resolve);
      return deferred.promise;
    }

    function createSession(session) {
      var deferred = $q.defer()
      Session.create(session);
      deferred.resolve(session);
      return deferred.promise;
    }

    function fetchUser(session) {
      var deferred = $q.defer()
      dpd.users.me().then(
        function(user) {
          svc.currentUser = user;
          $rootScope.currentUser = user;
          deferred.resolve(user);
        },
        deferred.reject
      );
      return deferred.promise;
    }

    function currentUser() {
      return currentUser;
    }

    function isAuthenticated() {
      return !!Session.userId;
    }

    function isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return svc.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;
    }
  }

})();