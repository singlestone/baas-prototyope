(function () {
  'use strict';

  angular.module('talentd')
    .factory('Role', Role);

  Role.$inject = ['$http', '$q'];
  function Role($http, $q) {
    return {
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function search(params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/roles', config);
    }

    function get(id, params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/roles/' + id, config);
    }

    function save(role) {
      var slug = role.id ? '/' + role.id : '';
      return $http({
        url: '/roles' + slug,
        method: role.id ? 'PUT' : 'POST',
        data: role
      });
    }

    function remove(role) {
      return $http({ url: '/roles/' + role.id, method: 'DELETE'});
    }

  }
})();