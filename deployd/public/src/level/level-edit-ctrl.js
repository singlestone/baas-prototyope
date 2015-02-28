(function () {
  'use strict';

  angular.module('talentd')
    .controller('LevelEditCtrl', LevelEditCtrl);

  LevelEditCtrl.$inject = ['$location', 'level', 'Level'];
  function LevelEditCtrl($location, level, Level) {
    var vm = this;

    vm.isAdd = !level;
    vm.level = level ? level.data : { };

    vm.save = save;

    function save(level) {
      Level.save(level).then(
        function(response) {
          $location.path('/level/' + response.data.id);
        }
      );
    }

  }
})();