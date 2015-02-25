(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantEditCtrl', ConsultantEditCtrl);

  ConsultantEditCtrl.$inject = ['$location', 'consultant', 'consultants', 'roles', 'teams', 'levels', 'Consultant'];
  function ConsultantEditCtrl($location, consultant, consultants, roles, teams, levels, Consultant) {
    var vm = this;

    vm.isAdd = !consultant;
    vm.consultant = consultant ? consultant.data : { roles: [] };
    vm.consultant.roles = vm.consultant.roles || [];

    vm.roles = roles.data;
    vm.levels = levels.data;
    vm.teams = teams.data;
    vm.managers = consultants.data;
    vm.newRole;

    vm.save = save;
    vm.addRole = addRole;
    vm.removeRole = removeRole;
    vm.getRole = getRole;
    vm.getTeamName = getTeamName;

    function save(consultant) {
      Consultant.save(consultant).then(
        function(response) {
          $location.path('/consultant/' + response.data.id);
        }
      );
    }

    function addRole(role) {
      vm.consultant.roles.push(role);
      vm.newRole = null;
    }

    function removeRole(role) {
      _.remove(vm.consultant.roles, function(value) { return value === role});  
    }

    function getRole(roleId) {
      return _.find(vm.roles, { id: roleId });
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