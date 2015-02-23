var level = this;

// unique name
dpd.levels.get(like('name'), unique('name'));

// unique abbreviation
dpd.levels.get(like('abbreviation'), unique('abbreviation'));

// abbreviation length <= 6
errorIf(level.abbreviation.length > 6, 'abbreviation', 'Abbreviation must be 6 characters or less.')

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
    return function(levels) {
        if (levels.length && (!level.id || level.id !== levels[0].id)) {
            error(fieldName, fieldName + ' must be unique');
        }
    }
}