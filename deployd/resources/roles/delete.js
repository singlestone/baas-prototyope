// cancel if exists in utilization.roleId
dpd.utilization.get({ roleId: this.id }, exists('Role used for at least one utilization record.'));

// cancel if exists in cosultants.roles
dpd.consultants.get({ roles: this.id }, exists('Role used for at least one consultant.'));

function exists(msg) {
    return function(results) {
        errorIf(results.length !== 0, 'id', msg);
    }
}