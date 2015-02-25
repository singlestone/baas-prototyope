(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantViewCtrl', ConsultantViewCtrl);

  ConsultantViewCtrl.$inject = ['$location', 'consultant', 'roles', 'Consultant', 'Level', 'Team'];
  function ConsultantViewCtrl($location, consultant, roles, Consultant, Level, Team) {
    var vm = this;

    vm.consultant = consultant.data;
    vm.getRole = getRole;
    vm.remove = remove;

    activate();

    function getRole(roleId) {
      return _.find(roles.data, { id: roleId });
    }

    function remove(consultant) {
      Consultant.remove(consultant).then(function() {
        $location.path('/consultant');
      })
    }

    function activate() {
      Level.get(vm.consultant.levelId).then(function(level) {
        vm.consultant.level = level.data;
      });

      Team.get(vm.consultant.teamId).then(function(team) {
        vm.consultant.team = team.data;
      });

      if (vm.consultant.managerId) {
        Consultant.get(vm.consultant.managerId).then(function(consultant) {
          vm.consultant.manager = consultant.data;
        });
      }
    }

  }
})();