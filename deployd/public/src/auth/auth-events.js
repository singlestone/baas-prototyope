(function () {
  'use strict';
  var authEvents = {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  };

  angular.module('talentd')
    .constant('AUTH_EVENTS', authEvents);

})();