(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantEditCtrl', ConsultantEditCtrl);

  ConsultantEditCtrl.$inject = ['$location', 'consultant', 'roles', 'Consultant'];
  function ConsultantEditCtrl($location, consultant, roles, Consultant) {
    var vm = this;

    vm.isAdd = !consultant;
    vm.consultant = consultant ? consultant.data : { roles: [] };
    vm.consultant.roles = vm.consultant.roles || [];

    vm.newRole;

    vm.save = save;
    vm.addRole = addRole;
    vm.removeRole = removeRole;
    vm.getRole = getRole;

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
      _.remove(vm.consultant.roles, function(value) { return value === role });  
    }

    function getRole(roleId) {
      return _.find(roles.data, { id: roleId });
    }

  }
})();