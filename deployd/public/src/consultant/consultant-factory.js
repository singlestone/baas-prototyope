(function () {
  'use strict';

  angular.module('talentd')
    .factory('Consultant', Consultant);

  Consultant.$inject = ['$http'];
  function Consultant($http) {
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
      return $http.get('/consultants', config);
    }

    function get(id, params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/consultants/' + id, config);
    }

    function save(consultant) {
      var slug = consultant.id ? '/' + consultant.id : '';
      return $http({
        url: '/consultants' + slug,
        method: consultant.id ? 'PUT' : 'POST',
        data: consultant
      });
    }

    function remove(consultant) {
      return $http({ url: '/consultants/' + consultant.id, method: 'DELETE'});
    }

  }
})();