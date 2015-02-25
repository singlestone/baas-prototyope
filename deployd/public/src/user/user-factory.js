(function () {
  'use strict';

  angular.module('talentd')
    .factory('User', User);

  User.$inject = ['$http', '$q'];
  function User($http, $q) {
    return {
      search: search,
      get: get,
      save: save,
      remove: remove
    };

    function search() {
      return $http.get('/users');
    }

    function get(id) {
      return $http.get('/users/' + id);
    }

    function save(user) {
      var slug = user.id ? '/' + user.id : '';
      return $http({
        url: '/users' + slug,
        method: user.id ? 'PUT' : 'POST',
        data: user
      });
    }

    function remove(user) {
      return $http({ url: '/users/' + user.id, method: 'DELETE'});
    }
  }
})();