(function() {
  'use strict';

  angular.module('talentd')
    .directive('roleSelect', RoleSelect);

  RoleSelect.$inject = ['Role'];
  function RoleSelect(Role) {
    return {
      require: 'ngModel',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        Role.search().then(function(result) {
          scope.roles = result.data;
        });

        scope.id = attrs.id || 'roleId';
        scope.name = attrs.name || 'roleId';
        scope.defaultValue = attrs.defaultValue || 'Select a Role';
      },
      template: '<select name="{{ name }}" class="form-control" id="{{ id }}" '
              + 'ng-options="role.id as role.name for role in roles | orderBy:\'name\'">'
              + '    <option value="">{{ defaultValue }}</option>'
              + '</select>'
    };
  }
})();