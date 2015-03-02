(function () {
  'use strict';

  angular.module('talentd')
    .factory('Project', Project);

  Project.$inject = ['$http'];
  function Project($http) {
    return {
      statuses: statuses,
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function statuses() {
      return [ 'Opportunity', 'Delivery', 'Completed' ];
    }

    function search(params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/projects', config);
    }

    function get(id, params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return $http.get('/projects/' + id, config);
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