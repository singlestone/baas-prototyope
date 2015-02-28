(function() {
  'use strict';

  angular.module('talentd')
    .directive('clientSelect', ClientSelect);

  ClientSelect.$inject = ['Client'];
  function ClientSelect(Client) {
    return {
      require: 'ngModel',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        Client.search().then(function(result) {
          scope.clients = result.data;
        });

        scope.id = attrs.id || 'clientId';
        scope.name = attrs.name || 'clientId';
        scope.defaultValue = attrs.defaultValue || 'Select a Client';
      },
      template: '<select name="{{ name }}" class="form-control" id="{{ id }}" '
              + 'ng-options="client.id as client.name for client in clients | orderBy:\'name\'">'
              + '    <option value="">{{ defaultValue }}</option>'
              + '</select>'
    };
  }
})();