var consultant = this;

if (query.loadRelations) {

    dpd.levels.get(consultant.levelId, function(result) {
        consultant.level = result; 
    });
    
    dpd.teams.get(consultant.teamId, function(result) {
        consultant.team = result; 
    });
    
    dpd.roles.get({ id: { $in: consultant.roles } }, function(result) {
        consultant.roles = result;
    });
    
    if (consultant.managerId) {
        dpd.consultants.get(consultant.managerId, function (result) {
            consultant.manager = result; 
        });
    }
}