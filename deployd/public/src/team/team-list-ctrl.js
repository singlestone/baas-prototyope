(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamListCtrl', TeamListCtrl);

  TeamListCtrl.$inject = ['teams', 'Team'];
  function TeamListCtrl(teams, Team) {
    var vm = this;

    vm.teams = teams.data;
  }
})();