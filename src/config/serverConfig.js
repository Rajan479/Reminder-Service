const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    EMAIL_ID : process.env.EMAIL_ID,
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD,
    MESSAGE_BROKER_URL : process.env.MESSAGE_BROKER_URL, 
    EXCHANAGE_NAME : process.env.EXCHANAGE_NAME,
    REMINDER_BINDING_KEY : process.env.REMINDER_BINDING_KEY
}