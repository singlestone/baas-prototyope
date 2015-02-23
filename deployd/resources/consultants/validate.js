var consultant = this;

// unique email
var query = {
    email: {
        $regex: '^' + this.email + '$',
        $options: 'i'
    }
};
dpd.consultants.get(query, function(consultants) {
    if (consultants.length && (!consultant.id || consultant.id !== consultants[0].id)) {
        error('email', 'Email must be unique');
    }
});

// teamId exists
dpd.teams.get(consultant.teamId, exists(consultant.teamId, 'teamId', 'Team'));

// levelId exists
dpd.levels.get(consultant.levelId, exists(consultant.levelId, 'levelId', 'Level'));

// userId exists
if (consultant.userId) {
    dpd.users.get(consultant.userId, exists(consultant.userId, 'userId', 'User'));
}

// Validate managerId
if (consultant.managerId) {
    // managerId exists in Consultants collection
    dpd.consultants.get(consultant.managerId, exists(consultant.managerId, 'managerId', 'Consultant'));
    
    // You can't be your own manager
    errorIf(consultant.managerId && consultant.managerId === consultant.id, 'managerId', 'A Consultant cannot be their own manager.')
}


// Each role exists
if (consultant.roles && consultant.roles.length > 0) {
    dpd.roles.get({ $in: consultant.roles }, function(roles) {
        errorIf(roles.length !== consultant.roles.length, 'roles', 'One or more roles are invalid.')
    })
}

// Helper functions
function exists(fieldValue, fieldName, collectionName) {
    return function(results) {
        errorIf(results.length === 0, fieldName, fieldValue + ' is not a valid ' + collectionName);
    }
}