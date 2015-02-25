var team = this;

// Hide teams with a parent unless an internal script is fetching them
// if (this.parentTeamId && !internal) {
//     cancel();
// }

// Attach child teams to parent
dpd.teams.get({parentTeamId: team.id, $limitRecursion: 5}, function(teams) {
    if (teams && teams.length) {
        team.children = teams;
    }
});