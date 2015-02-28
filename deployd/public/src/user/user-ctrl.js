(function () {
  'use strict';

  angular.module('talentd')
    .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$location', 'user', 'User', 'USER_ROLES'];
  function UserCtrl($location, user, User, USER_ROLES) {
    var vm = this;

    vm.isAdd = !user;
    vm.user = user ? user.data : { roles: [] };
    vm.roles = _.values(USER_ROLES);
    vm.newRole;

    vm.save = save;
    vm.addRole = addRole;
    vm.removeRole = removeRole;

    function save(user) {
      User.save(user).then(
        function() {
          $location.path('/user');
        }
      );
    }

    function addRole(role) {
      vm.user.roles.push(role);
      vm.newRole = null;
    }

    function removeRole(role) {
      _.remove(vm.user.roles, function(value) { return value === role});  
    }
  }
})();