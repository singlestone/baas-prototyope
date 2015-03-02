(function () {
  'use strict';

  angular.module('talentd')
    .controller('ProjectEditCtrl', ProjectEditCtrl);

  ProjectEditCtrl.$inject = ['$location', 'project','statuses', 'Project'];
  function ProjectEditCtrl($location, project, statuses, Project) {
    var vm = this;

    vm.isAdd = !project;
    vm.project = vm.isAdd ? { members: [] } : project.data;
    vm.statuses = statuses;
    vm.date = {
      options: { startingDay: 1 },
      format: 'MM/dd/yyyy',
      startOpened: false,
      endOpened: false,
      open: openDatePopup
    }

    vm.save = save;

    function save(project) {
      project.startDate = project.startDate.getTime();
      project.endDate = project.endDate.getTime();

      Project.save(project).then(
        function(response) {
          $location.path('/project/' + response.data.id);
        }
      );
    }

    function openDatePopup(field, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.date[field + 'Opened'] = true;
    }

  }
})();