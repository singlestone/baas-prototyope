(function () {
  'use strict';

  angular.module('talentd')
    .controller('RoleEditCtrl', RoleEditCtrl);

  RoleEditCtrl.$inject = ['$location', 'role', 'Role'];
  function RoleEditCtrl($location, role, Role) {
    var vm = this;

    vm.isAdd = !role;
    vm.role = role ? role.data : { };

    vm.save = save;

    function save(consultant) {
      Role.save(consultant).then(
        function(response) {
          $location.path('/role/' + response.data.id);
        }
      );
    }

  }
})();