(function () {
  'use strict';

  angular.module('talentd')
    .factory('Team', Team);

  Team.$inject = ['$http'];
  function Team($http) {
    return {
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function search() {
      return $http.get('/teams');
    }

    function get(id) {
      return $http.get('/teams/' + id);
    }

    function save(team) {
      var slug = team.id ? '/' + team.id : '';
      return $http({
        url: '/teams' + slug,
        method: team.id ? 'PUT' : 'POST',
        data: team
      });
    }

    function remove(team) {
      return $http({ url: '/teams/' + team.id, method: 'DELETE'});
    }
  }
})();