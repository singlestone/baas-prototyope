(function () {
  'use strict';

  angular.module('talentd')
    .factory('Session', Session);

  function Session() {
    return {
      create: createSession,
      destroy: destroySession
    };
  }

  function createSession(session) {
    this.id = session.id;
    this.userId = session.uid;
  }

  function destroySession() {
    this.id = null;
    this.userId = null;
  }

})();