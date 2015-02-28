(function () {
  'use strict';

  angular.module('talentd')
    .controller('ClientEditCtrl', ClientEditCtrl);

  ClientEditCtrl.$inject = ['$location', 'client', 'Client'];
  function ClientEditCtrl($location, client, Client) {
    var vm = this;

    vm.isAdd = !client;
    vm.client = client ? client.data : { };

    vm.save = save;

    function save(consultant) {
      Client.save(consultant).then(
        function(response) {
          $location.path('/client/' + response.data.id);
        }
      );
    }

  }
})();