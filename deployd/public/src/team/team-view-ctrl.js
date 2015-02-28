(function () {
  'use strict';

  angular.module('talentd')
    .controller('TeamViewCtrl', TeamViewCtrl);

  TeamViewCtrl.$inject = ['$location', 'team', 'Team'];
  function TeamViewCtrl($location, team, Team) {
    var vm = this;

    vm.team = team.data;
    vm.remove = remove;

    function remove(team) {
      Team.remove(team).then(function() {
        $location.path('/team');
      })
    }

  }
})();