(function () {
  'use strict';

  angular.module('talentd')
    .controller('ProjectMemberCtrl', ProjectMemberCtrl);

  ProjectMemberCtrl.$inject = ['$modalInstance', 'project', 'member', 'Project'];
  function ProjectMemberCtrl($modalInstance, project, member, Project) {
    var vm = this;

    vm.isAdd = !member;
    vm.project = project;
    vm.member = member || { roleIds: [] };

    vm.save = save;
    vm.cancel = cancel;

    function save(member) {

      if (vm.isAdd) {
        member.id = nextId();
        project.members.push(member);
      }

      Project.save(project).then(function() {
        // This is an annoying flaw in the loadRelations strategy....the relations are not
        // loaded for PUT and POST operations. Fetch the whole project and tease out the member.
        Project.get(project.id, { loadRelations: true }).then(function(result) {
          var m = _.find(result.data.members, { id: member.id });
          member.consultant = m.consultant;
          member.level = m.level;
          member.roles = m.roles;
          $modalInstance.close(member);
        });
      });
    }

    function cancel() {
      $modalInstance.dismiss('cancel');
    }

    function nextId() {
      var lastId = _.max(vm.project.members, function(member) {
        return member.id;
      }).id;
      return lastId ? (lastId + 1) : 1;
    }

  }
})();