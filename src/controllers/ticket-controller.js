const TicketService = require('../services/email-service.js');

const create = async function(request, response){
    try {
        const result = await TicketService.createNotification(request.body);
        return response.status(201).body({
            success: true,
            data: result,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        return response.status(500).body({
            success: false,
            data: {},
            err: error,
            message: 'Unable to register an email reminder'
        });
    }
}

module.exports = {
    create
}