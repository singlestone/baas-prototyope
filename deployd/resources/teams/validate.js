// unique name
var team = this;

// unique name
dpd.teams.get(like('name'), unique('name'));

// unique abbreviation
dpd.teams.get(like('abbreviation'), unique('abbreviation'));

// abbreviation.length <= 6
errorIf(team.abbreviation.length > 6, 'abbreviation', 'Abbreviation must be 6 characters or less.')

// managerId exists in Consultants
if (team.managerId) {
    dpd.consultants.get(team.managerId, exists(team.managerId, 'managerId', 'Consultant'));
}

// parentTeamId exists in Teams
if (team.parentTeamId) {
    dpd.teams.get(team.parentTeamId, exists(team.parentTeamId, 'parentTeamId', 'Team'));
}


// Helper functions
function like(field) {
    var query = {};
    query[field] = {
        $regex: '^' + team[field] + '$',
        $options: 'i'        
    };
    return query;
}

function unique(fieldName) {
    return function(teams) {
        if (teams.length && (!team.id || team.id !== teams[0].id)) {
            error(fieldName, fieldName + ' must be unique');
        }
    }
}

function exists(fieldValue, fieldName, collectionName) {
    return function(results) {
        errorIf(results.length === 0, fieldName, fieldValue + ' is not a valid ' + collectionName);
    }
}