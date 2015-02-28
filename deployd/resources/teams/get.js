var team = this;

// Hide teams with a parent unless an internal script is fetching them
// if (this.parentTeamId && !internal) {
//     cancel();
// }

if (query.loadRelations) {

    if (team.parentTeamId) {
        dpd.teams.get(team.parentTeamId, function(result) {
            team.parentTeam = result;
        });
    }
    
    if (team.managerId) {
        dpd.consultants.get(team.managerId, function(result) {
            team.manager = result;
        });
    }

    // Attach child teams to parent
    dpd.teams.get({parentTeamId: team.id, $limitRecursion: 5}, function(teams) {
        if (teams && teams.length) {
            team.children = teams;
        }
    });
}