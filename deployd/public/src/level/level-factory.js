(function () {
  'use strict';

  angular.module('talentd')
    .factory('Level', Level);

  Level.$inject = ['$http'];
  function Level($http) {
    return {
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function search() {
      return $http.get('/levels');
    }

    function get(id) {
      return $http.get('/levels/' + id);
    }

    function save(level) {
      var slug = level.id ? '/' + level.id : '';
      return $http({
        url: '/levels' + slug,
        method: level.id ? 'PUT' : 'POST',
        data: level
      });
    }

    function remove(level) {
      return $http({ url: '/levels/' + level.id, method: 'DELETE'});
    }
  }
})();