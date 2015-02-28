(function () {
  'use strict';

  angular.module('talentd')
    .controller('RoleListCtrl', RoleListCtrl);

  RoleListCtrl.$inject = ['roles', 'Role'];
  function RoleListCtrl(roles, Role) {
    var vm = this;

    vm.roles = roles.data;
  }
})();