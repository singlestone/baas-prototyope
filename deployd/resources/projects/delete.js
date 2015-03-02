var project = this;

// cascade delete utilization
dpd.utilization.get({ projectId: project.id }, function(results) {
    var ids = results.map(function(result) { return result.id; });
    dpd.utilization.del({ id: { $in: ids} });
});