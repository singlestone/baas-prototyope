(function () {
  'use strict';

  angular.module('talentd')
    .factory('Role', Role);

  Role.$inject = ['$http', '$q'];
  function Role($http, $q) {
    return {
      search: search,
      create: create
    };

    function search() {
      return $http.get('/roles');
    }

    function create(role) {
      return $http.post('/roles', role);
    }

  }
})();