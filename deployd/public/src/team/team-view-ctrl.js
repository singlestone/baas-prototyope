(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamViewCtrl', TeamViewCtrl);

  TeamViewCtrl.$inject = ['$location', 'team', 'Consultant', 'Team'];
  function TeamViewCtrl($location, team, Consultant, Team) {
    var vm = this;

    vm.team = team.data;
    vm.remove = remove;

    activate();

    function remove(team) {
      Team.remove(team).then(function() {
        $location.path('/team');
      })
    }

    function activate() {

      if (vm.team.parentTeamId) {
        Team.get(vm.team.parentTeamId).then(function(team) {
          vm.team.parentTeam = team.data;
        });
      }

      if (vm.team.managerId) {
        Consultant.get(vm.team.managerId).then(function(consultant) {
          vm.team.manager = consultant.data;
        });
      }
    }

  }
})();