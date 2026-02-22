const cron = require('node-cron');
const sender = require('../config/emailConfig.js');

const setupJobs = function(){
    cron.schedule('*/2 * * * *', async function(){
        const response = await EmailService.fetchPendingEmails();
        response.forEach(function(email){
            sender.sendMail({
            to : email.recepientEmail,
            subject : email.subject,
            text : email.content
            }, 
            async function(err, data){
                if(err) console.log(err);
                else{
                    console.log(data);
                    await EmailService.updateTicket(email.id, { status : "SUCCESS"});
                }
            });
        });
    })
};

module.exports = setupJobs;