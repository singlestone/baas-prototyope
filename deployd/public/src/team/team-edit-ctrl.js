(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamEditCtrl', TeamEditCtrl);

  TeamEditCtrl.$inject = ['$location', 'team', 'consultants', 'teams', 'Team'];
  function TeamEditCtrl($location, team, consultants, teams, Team) {
    var vm = this;

    vm.isAdd = !team;
    vm.team = team ? team.data : { };

    vm.teams = teams.data;
    vm.managers = consultants.data;

    vm.save = save;
    vm.getTeamName = getTeamName;

    function save(team) {
      Team.save(team).then(
        function(response) {
          $location.path('/team/' + response.data.id);
        }
      );
    }

    function getTeamName(team) {
      if (!team) return;
      var names = [team.name];
      var t = team;

      while (t && t.parentTeamId) {
        t = _.find(teams.data, { id: t.parentTeamId });
        if (t) {
          names.push(t.name);
        }
      }
      return names.reverse().join(' > ');
    }

  }
})();