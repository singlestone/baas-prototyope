(function () {
  'use strict';

  angular.module('talentd')
    .controller('ClientViewCtrl', ClientViewCtrl);

  ClientViewCtrl.$inject = ['$location', 'client', 'Client'];
  function ClientViewCtrl($location, client, Client) {
    var vm = this;

    vm.client = client.data;
    vm.remove = remove;

    function remove(client) {
      Client.remove(client).then(function() {
        $location.path('/client');
      })
    }

  }
})();