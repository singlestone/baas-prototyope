(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantViewCtrl', ConsultantViewCtrl);

  ConsultantViewCtrl.$inject = ['$location', 'consultant', 'Consultant'];
  function ConsultantViewCtrl($location, consultant, Consultant) {
    var vm = this;

    vm.consultant = consultant.data;
    vm.remove = remove;

    function remove(consultant) {
      Consultant.remove(consultant).then(function() {
        $location.path('/consultant');
      })
    }

  }
})();