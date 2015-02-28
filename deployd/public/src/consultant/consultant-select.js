(function() {
  'use strict';

  angular.module('talentd')
    .directive('consultantSelect', ConsultantSelect);

  ConsultantSelect.$inject = ['Consultant'];
  function ConsultantSelect(Consultant) {
    return {
      require: 'ngModel',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        Consultant.search().then(function(result) {
          scope.consultants = result.data;
        });

        scope.id = attrs.id || 'consultantId';
        scope.name = attrs.name || 'consultantId';
        scope.defaultValue = attrs.defaultValue || 'Select a Consultant';
      },
      template: '<select name="{{ name }}" class="form-control" id="{{ id }}" '
              + 'ng-options="consultant.id as consultant.name for consultant in consultants | orderBy:\'name\'">'
              + '    <option value="">{{ defaultValue }}</option>'
              + '</select>'
    };
  }
})();