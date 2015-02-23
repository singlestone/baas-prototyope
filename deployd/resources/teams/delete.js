// cancel if used on Consultants.teamId
dpd.consultants.get({ teamId: this.id }, exists('Team used for at least one consultant.'));

// cancel if used on Roles.teamId
dpd.roles.get({ teamId: this.id }, exists('Team used for at least one role.'));

// Helpers
function exists(msg) {
    return function(results) {
        errorIf(results.length !== 0, 'id', msg);
    }
}