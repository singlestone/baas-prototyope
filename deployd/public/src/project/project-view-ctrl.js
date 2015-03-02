(function () {
  'use strict';

  angular.module('talentd')
    .controller('ProjectViewCtrl', ProjectViewCtrl);

  ProjectViewCtrl.$inject = ['$modal', '$location', 'project', 'utilization', 'Project', 'Utilization'];
  function ProjectViewCtrl($modal, $location, project, utilization, Project, Utilization) {
    var vm = this;

    vm.project = project.data;
    vm.project.members = vm.project.members || [];

    vm.remove = remove;
    vm.addMember = addMember;
    vm.editMember = editMember;
    vm.removeMember = removeMember;
    vm.weekShown = weekShown;
    vm.upsertUtilization = upsertUtilization;
    vm.moveUp = move(-1);
    vm.moveDown = move(1);

    activate();

    function activate() {

      vm.weeks = getWeeks(vm.project.startDate, vm.project.endDate);

      vm.memberUtilization = _.reduce(vm.project.members, function(map, member) {
        map[member.id] = memberUtilization(member);
        return map;
      }, {});
    }

    function remove(client) {
      Project.remove(client).then(function() {
        $location.path('/project');
      })
    }

    function addMember() {
      openMemberModal().then(function(member) {
        vm.memberUtilization[member.id] = memberUtilization(member);
      });
    }

    function removeMember(member) {
      _.remove(vm.project.members, function(m) {
        return m.id === member.id;
      });
      Project.save(vm.project);
    }

    function editMember(member) {
      openMemberModal(member).then(function(result) {
        vm.memberUtilization[result.id] = memberUtilization(result);
      });
    }

    function weekShown(date) {
      // TODO - Implement paging logic
      return true;
    }

    function upsertUtilization(utilization) {
      if (utilization.hours) {
        Utilization.save(utilization).then(function(response) {
          utilization.id = response.data.id;
        });
      } else {
        Utilization.remove(utilization).then(function(response) {
          delete utilization.id;
        });
      }
    }

    function getWeeks(startTimestamp, endTimestamp) {
      var weeks = [];
      var $dt = moment(startTimestamp).startOf('week').add(1, 'day').startOf('day');
      var $end = moment(endTimestamp).endOf('day');

      while($dt.isBefore($end)) {
        weeks.push({
          dt: $dt.toDate().getTime(),
          display: $dt.format('MMM-DD')
        });
        $dt.add(1, 'week');
      }

      return weeks;
    }

    function memberUtilization(member) {
      return _.map(vm.weeks, function(week) {
        return _.find(utilization.data, { memberId: member.id, date: week.dt }) || {
          projectId: vm.project.id, 
          memberId: member.id,
          consultantId: member.consultantId,
          date: week.dt
        };
      });
    }

    function openMemberModal(member) {
      return $modal.open({
        templateUrl: 'src/project/member.html',
        controller: 'ProjectMemberCtrl',
        controllerAs: 'proj',
        resolve: {
          project: function() {
            return vm.project;
          },
          member: function() {
            return member;
          }
        }
      }).result;
    }

    function move(factor) {
      return function(index) {
        var temp = vm.project.members[index];
        vm.project.members[index] = vm.project.members[index + factor];
        vm.project.members[index + factor] = temp;
        Project.save(vm.project);
      }
    }
  }
})();