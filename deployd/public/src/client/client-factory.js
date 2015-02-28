(function () {
  'use strict';

  angular.module('talentd')
    .factory('Client', Client);

  Client.$inject = ['$http'];
  function Client($http) {
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
      return $http.get('/clients', config);
    }

    function get(id, params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/clients/' + id, config);
    }

    function save(client) {
      var slug = client.id ? '/' + client.id : '';
      return $http({
        url: '/clients' + slug,
        method: client.id ? 'PUT' : 'POST',
        data: client
      });
    }

    function remove(client) {
      return $http({ url: '/clients/' + client.id, method: 'DELETE'});
    }

  }
})();