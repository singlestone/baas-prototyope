(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamListCtrl', TeamListCtrl);

  TeamListCtrl.$inject = ['teams', 'consultants', 'Team'];
  function TeamListCtrl(teams, consultants, Team) {
    var vm = this;

    vm.teams = teams.data;

    vm.getParent = getParent;
    vm.getManager = getManager;

    function getParent(teamId) {
      return teamId ? _.find(teams.data, { id: teamId}) : null;
    }

    function getManager(managerId) {
      return managerId ? _.find(consultants.data, { id: managerId}) : null;
    }
  }
})();