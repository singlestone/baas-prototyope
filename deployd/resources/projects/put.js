var project = this;

// Remove utilization entries outside the specified range
dpd.utilization.get({ projectId: project.id, date: { $lt: project.startDate } }, remove);
dpd.utilization.get({ projectId: project.id, date: { $gt: project.endDate } }, remove);

function remove(results) {
    var ids = results.map(function(result) { return result.id; });
    dpd.utilization.del({ id: { $in: ids } });
} 