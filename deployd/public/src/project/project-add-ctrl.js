(function () {
  'use strict';

  angular.module('talentd')
    .controller('ProjectAddCtrl', ProjectAddCtrl);

  ProjectAddCtrl.$inject = ['$location', 'clients', 'statuses', 'Project'];
  function ProjectAddCtrl($location, clients, statuses, Project) {
    var vm = this;

    vm.project = { members: [] };
    vm.clients = clients.data;
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
          $location.path('/project/' + response.data.id + '/edit');
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