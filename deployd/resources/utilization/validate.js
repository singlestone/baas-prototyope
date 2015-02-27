var util = this;

// Ensure projectId is valid Project
dpd.projects.get(util.projectId, exists(util.projectId, 'projectId', 'Project'));

// Ensure consultantId is valid Consultant
dpd.consultants.get(util.consultantId, exists(util.consultantId, 'consultantId', 'Consultant'));

// Hours >= 0 && hours <= 45
errorIf(util.hours < 0 || util.hours > 45, 'hours', 'Hours must be between 0 and 45.')


// Helpers
function exists(fieldValue, fieldName, collectionName) {
    return function(results) {
        errorIf(results.length === 0, fieldName, fieldValue + ' is not a valid ' + collectionName);
    }
}