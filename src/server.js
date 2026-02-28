const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig.js');
const { createChannel } = require('./utils/messageQueue.js');
const sendBasicEmail = require('./services/email-service.js');

const setupAndStartServer = async function(){
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    const channel = await createChannel();


    app.listen(PORT, function(){
        console.log(`Server started on port ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'rajanparmar5007@gmail.com',
            'This is testing email',
            'Hey, how are you, I hope you like the support'
        );
    });
}

setupAndStartServer();