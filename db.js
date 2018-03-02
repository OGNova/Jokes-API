const config = require('./config');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.mogno_name}:${config.mogno_password}@ds151558.mlab.com:51558/restify-api`);