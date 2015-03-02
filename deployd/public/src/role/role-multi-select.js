(function() {
  'use strict';

  angular.module('talentd')
    .directive('roleMultiSelect', RoleMultiSelect);

  RoleMultiSelect.$inject = ['Role'];
  function RoleMultiSelect(Role) {
    return {
      restrict: 'E',
      scope: {
        roles: '='
      },
      link: link,
      templateUrl: 'src/role/role-multi-select.html'
    };

    function link(scope, element, attrs) {
      var roles = [];

      scope.addRole = addRole;
      scope.removeRole = removeRole;
      scope.getRole = getRole;

      activate();

      function activate() {
        Role.search().then(function(result) {
          roles = result.data;
        });
      }

      function addRole(role) {
        scope.roles.push(role);
        scope.newRole = null;
      }

      function removeRole(role) {
        _.remove(scope.roles, function(value) { return value === role });
      }

      function getRole(roleId) {
        return _.find(roles, { id: roleId });
      }
    }
  }
})();