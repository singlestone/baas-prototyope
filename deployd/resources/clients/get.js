var client = this;

if (query.loadRelations) {

    if (client.clientPartnerId) {
        dpd.consultants.get(client.clientPartnerId, function(result) {
            client.clientPartner = result;
        });
    }
}