(function () {
  'use strict';

  angular.module('talentd')
    .controller('ProjectListCtrl', ProjectListCtrl);

  ProjectListCtrl.$inject = ['projects'];
  function ProjectListCtrl(projects) {
    var vm = this;

    vm.projects = projects.data;

    vm.projectComparator = projectComparator;

    function projectComparator(project) {
      var prefix = project.status === 'Delivery' ? 'A'
                 : project.status === 'Opportunity' ? 'B'
                 : 'C';
      return prefix + project.client + project.name;
    }
  }
})();