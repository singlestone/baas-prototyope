(function() {
  'use strict';

  angular.module('talentd')
    .directive('levelSelect', LevelSelect);

  LevelSelect.$inject = ['Level'];
  function LevelSelect(Level) {
    return {
      require: 'ngModel',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        Level.search().then(function(result) {
          scope.levels = result.data;
        });

        scope.id = attrs.id || 'levelId';
        scope.name = attrs.name || 'levelId';
        scope.defaultValue = attrs.defaultValue || 'Select a Level';
      },
      template: '<select name="{{ name }}" class="form-control" id="{{ id }}" '
              + 'ng-options="level.id as level.name for level in levels | orderBy:\'order\'">'
              + '    <option value="">{{ defaultValue }}</option>'
              + '</select>'
    };
  }
})();