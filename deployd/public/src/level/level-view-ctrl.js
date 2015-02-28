(function () {
  'use strict';

  angular.module('talentd')
    .controller('LevelViewCtrl', LevelViewCtrl);

  LevelViewCtrl.$inject = ['$location', 'level', 'Level'];
  function LevelViewCtrl($location, level, Level) {
    var vm = this;

    vm.level = level.data;
    vm.remove = remove;

    function remove(level) {
      Level.remove(level).then(function() {
        $location.path('/level');
      })
    }

  }
})();