(function () {
  'use strict';

  angular.module('talentd')
    .factory('Consultant', Consultant);

  Consultant.$inject = ['$http'];
  function Consultant($http) {
    return {
      search: search,
      create: create
    };

    function search() {
      return $http.get('/consultants');
    }

    function create(consultant) {
      return $http.post('/consultants', consultant);
    }

  }
})();