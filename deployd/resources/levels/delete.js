// Prevent delete if any consultants are using that level
dpd.consultants.get({ levelId: this.id }, function(consultants) {
    errorIf(consultants.length !== 0, 'id', 'Level used for at least one consultant.');
});