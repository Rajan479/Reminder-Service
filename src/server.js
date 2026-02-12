const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig.js');

const setupAndStartServer = function(){
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    app.listen(PORT, function(){
        console.log(`Server started on port ${PORT}`);
    });
}

setupAndStartServer();