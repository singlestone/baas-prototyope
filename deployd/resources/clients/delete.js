// Error if Client has been used on a Project
dpd.projects.get({ clientId: this.id }, function(projects) {
    errorIf(projects.length !== 0, 'id', 'Client used on at least one project.');
});
