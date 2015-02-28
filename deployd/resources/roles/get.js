var role = this;

if (query.loadRelations) {

    if (role.teamId) {
        dpd.teams.get(role.teamId, function(result) {
            role.team = result;
        });
    }
}