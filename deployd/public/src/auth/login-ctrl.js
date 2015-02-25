(function () {
  'use strict';

  angular.module('talentd')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$location', 'Auth'];
  function LoginCtrl($location, Auth) {
    var vm = this;

    vm.credentials = {
      username: '',
      password: ''
    };

    vm.login = function (credentials) {
      Auth.login(credentials).then(
        function (user) {
          // success
          $location.path('/');
        }, function (response) {
          //fail
          vm.error = response.message;
        });
    };
  }
})();