(function () {
  'use strict';

  angular.module('talentd')
    .factory('Utilization', Utilization);

  Utilization.$inject = ['$http'];
  function Utilization($http) {
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
      return $http.get('/utilization', config);
    }

    function get(id, params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/utilization/' + id, config);
    }

    function save(instance) {
      var slug = instance.id ? '/' + instance.id : '';
      return $http({
        url: '/utilization' + slug,
        method: instance.id ? 'PUT' : 'POST',
        data: instance
      });
    }

    function remove(instance) {
      return $http({ url: '/utilization/' + instance.id, method: 'DELETE'});
    }

  }
})();