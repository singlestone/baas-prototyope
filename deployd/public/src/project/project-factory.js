(function () {
  'use strict';

  angular.module('talentd')
    .factory('Project', Project);

  Project.$inject = ['$http'];
  function Project($http) {
    return {
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function search() {
      return $http.get('/projects');
    }

    function get(id) {
      return $http.get('/projects/' + id);
    }

    function save(project) {
      var slug = project.id ? '/' + project.id : '';
      return $http({
        url: '/projects' + slug,
        method: project.id ? 'PUT' : 'POST',
        data: project
      });
    }

    function remove(project) {
      return $http({ url: '/projects/' + project.id, method: 'DELETE'});
    }

  }
})();