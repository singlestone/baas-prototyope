var project = this;

if (query.loadRelations) {
    dpd.clients.get(project.clientId, function(result) {
       project.client = result; 
    });
    
    if (project.members) {
        project.members.forEach(function(member) {
            if (member.consultantId) {
                dpd.consultants.get(member.consultantId, function(result) {
                   member.consultant = result; 
                });
            }
            
            dpd.levels.get(member.levelId, function(result) {
               member.level = result; 
            });
            
            if (member.roleIds && member.roleIds.length) {
                dpd.roles.get({ id: { $in: member.roleIds } }, function(result) {
                    member.roles = result;
                })
            }
        })
    }
}