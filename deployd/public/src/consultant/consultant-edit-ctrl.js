(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantEditCtrl', ConsultantEditCtrl);

  ConsultantEditCtrl.$inject = ['$location', 'consultant', 'roles', 'Consultant'];
  function ConsultantEditCtrl($location, consultant, roles, Consultant) {
    var vm = this;

    vm.isAdd = !consultant;
    vm.consultant = consultant ? consultant.data : { roles: [] };
    vm.consultant.roles = vm.consultant.roles || [];

    vm.save = save;

    function save(consultant) {
      Consultant.save(consultant).then(
        function(response) {
          $location.path('/consultant/' + response.data.id);
        }
      );
    }

  }
})();