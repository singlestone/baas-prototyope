(function () {
  'use strict';

  var userRoles = {
    admin: 'admin',
    manager: 'manager'
  };

  angular.module('talentd')
    .constant('USER_ROLES', userRoles);
})();