(function () {
  'use strict';

  angular.module('talentd')
    .controller('RoleViewCtrl', RoleViewCtrl);

  RoleViewCtrl.$inject = ['$location', 'role', 'Role'];
  function RoleViewCtrl($location, role, Role) {
    var vm = this;

    vm.role = role.data;
    vm.remove = remove;

    function remove(role) {
      Role.remove(role).then(function() {
        $location.path('/role');
      })
    }

  }
})();