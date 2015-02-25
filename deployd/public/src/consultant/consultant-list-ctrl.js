(function () {
  'use strict';

  angular.module('talentd')
    .controller('ConsultantListCtrl', ConsultantListCtrl);

  ConsultantListCtrl.$inject = ['consultants', 'Consultant'];
  function ConsultantListCtrl(consultants, Consultant) {
    var vm = this;

    vm.consultants = consultants.data;
  }
})();