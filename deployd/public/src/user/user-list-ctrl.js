(function () {
  'use strict';

  angular.module('talentd')
    .controller('UserListCtrl', UserListCtrl);

  UserListCtrl.$inject = ['$route', 'users', 'User'];
  function UserListCtrl($route, users, User) {
    var vm = this;

    vm.users = users.data;
    vm.remove = remove;

    function remove(user) {
      User.remove(user).then($route.reload);
    }
  }
})();