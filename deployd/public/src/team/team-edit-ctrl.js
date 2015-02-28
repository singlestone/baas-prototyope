(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamEditCtrl', TeamEditCtrl);

  TeamEditCtrl.$inject = ['$location', 'team', 'Team'];
  function TeamEditCtrl($location, team, Team) {
    var vm = this;

    vm.isAdd = !team;
    vm.team = team ? team.data : { };

    vm.save = save;

    function save(team) {
      Team.save(team).then(
        function(response) {
          $location.path('/team/' + response.data.id);
        }
      );
    }

  }
})();