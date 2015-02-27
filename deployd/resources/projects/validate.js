var project = this;

// unique name
dpd.projects.get(like('name'), unique('name'));

// clientId exists in Clients
dpd.clients.get(project.clientId, exists(project.clientId, 'clientId', 'Client'));


// endDate > startDate
if (project.startDate && project.endDate) {
    errorIf(project.startDate > project.endDate, 'endDate', 'End date must be after start date.')
}

// validate probability
errorIf(project.probability < 0 || project.probability > 1, 'probability', 'Probability must be between 0 and 1.')

// Helper functions
function like(field) {
    var query = {};
    query[field] = {
        $regex: '^' + project[field] + '$',
        $options: 'i'        
    };
    return query;
}

function unique(fieldName) {
    return function(projects) {
        if (projects.length && (!project.id || project.id !== projects[0].id)) {
            error(fieldName, fieldName + ' must be unique');
        }
    }
}

function exists(fieldValue, fieldName, collectionName) {
    return function(results) {
        errorIf(results.length === 0, fieldName, fieldValue + ' is not a valid ' + collectionName);
    }
}