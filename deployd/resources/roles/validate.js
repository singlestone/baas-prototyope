var role = this;

// unique name
dpd.roles.get(like('name'), unique('name'));

// unique abbreviation
dpd.roles.get(like('abbreviation'), unique('abbreviation'));

// abbreviation.length <= 6
errorIf(role.abbreviation.length > 6, 'abbreviation', 'Abbreviation must be 6 characters or less.')

// teamId exists in Teams
dpd.teams.get(role.teamId, exists(role.teamId, 'teamId', 'Team'));

// Helper functions
function like(field) {
    var query = {};
    query[field] = {
        $regex: '^' + level[field] + '$',
        $options: 'i'        
    };
    return query;
}

function unique(fieldName) {
    return function(roles) {
        if (roles.length && (!role.id || role.id !== roles[0].id)) {
            error(fieldName, fieldName + ' must be unique');
        }
    }
}

function exists(fieldValue, fieldName, collectionName) {
    return function(results) {
        errorIf(results.length === 0, fieldName, fieldValue + ' is not a valid ' + collectionName);
    }
}