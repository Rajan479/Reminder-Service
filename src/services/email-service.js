const sender = require('../config/emailConfig.js');
const TicketRepository = require('../repository/ticket-repository.js');

const sendBasicEmail = async function(mailFrom, mailTo , mailSubject, mailBody){
    try {
        const response = await sender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        });
        console.log(response);
    } catch (error) {
       console.log(error);
    }
}

const fetchPendingEmails  = async function(timestamp){
    try {
        const response = await TicketRepository.getTicket({ status : "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async function(ticketId, data){
    try {
        const response = await TicketRepository.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async function(data){
    try {
        const response = await TicketRepository.createTicket(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
};