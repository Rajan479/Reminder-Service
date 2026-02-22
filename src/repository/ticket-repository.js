const { NotificationTicket } = require('../models/index.js');
const { Op } = require('sequelize');

const getAllTickets = async function(){
    try {
        const tickets = await NotificationTicket.findAll();
        return tickets;
    } catch (error) {
        throw error;
    }
}

const createTicket = async function(data){
    try {
        const ticket = await NotificationTicket.create(data);
        return ticket;
    } catch (error) {
        throw error;
    }
}

const getTicket = async function(filter){
    try {
        const tickets = await NotificationTicket.findAll({
            where : {
                status : filter.status,
                notificationTime : {
                    [Op.lte] : new Date()
                }
            }
        });
        return tickets;
    } catch (error) {
        throw error;
    }
}

const updateTicket = async function(ticketId, data){
    try {
        const ticket = await NotificationTicket.findByPk(ticketId);
        if(data.status) ticket.status = data.status;
        await ticket.save();
        return ticket;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllTickets,
    createTicket,
    getTicket,
    updateTicket
}