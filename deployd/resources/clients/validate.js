var client = this;

// unique name
var query = {
    name: {
        $regex: '^' + client.name + '$',
        $options: 'i'
    }
};
dpd.clients.get(query, function(clients) {
    if (clients.length && (!client.id || client.id !== clients[0].id)) {
        error('name', 'Name must be unique');
    }
});

// clientPartnerId is null or valid Consultant
if (client.clientPartnerId) {
    dpd.consultants.get(client.clientPartnerId, function(consultants) {
        errorIf(consultants.length === 0, 'clientPartnerId', client.clientPartnerId + ' is not a valid Consultant');
    });
}