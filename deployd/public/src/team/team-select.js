(function() {
  'use strict';

  angular.module('talentd')
    .directive('teamSelect', TeamSelect);

  TeamSelect.$inject = ['Team'];
  function TeamSelect(Team) {

    return {
      require: 'ngModel',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        Team.search().then(function(result) {
          scope.teams = result.data;
        });

        scope.id = attrs.id || 'teamId';
        scope.name = attrs.name || 'teamId';
        scope.defaultValue = attrs.defaultValue || 'Select a Team';

        scope.getTeamName = getTeamName;
      },
      template: '<select name="{{ name }}" class="form-control" id="{{ id }}" '
              + 'ng-options="team.id as getTeamName(team) for team in teams | orderBy:\'order\'"> '
              + '   <option value="">{{ defaultValue }}</option>'
              + '</select>'
    };
  }

  function getTeamName(team) {
    if (!team) return;

    var names = [team.name];
    var t = team;

    while (t.parent) {
      t = t.parent;
      names.push(t.name);
    }
    return names.reverse().join(' > ');
  }
})();