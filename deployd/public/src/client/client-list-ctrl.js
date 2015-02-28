(function () {
  'use strict';

  angular.module('talentd')
    .controller('ClientListCtrl', ClientListCtrl);

  ClientListCtrl.$inject = ['clients', 'Client'];
  function ClientListCtrl(clients, Client) {
    var vm = this;

    vm.clients = clients.data;
  }
})();