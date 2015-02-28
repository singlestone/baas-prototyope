(function () {
  'use strict';

  angular.module('talentd')
    .controller('LevelListCtrl', LevelListCtrl);

  LevelListCtrl.$inject = ['levels'];
  function LevelListCtrl(levels) {
    var vm = this;

    vm.levels = levels.data;
  }
})();