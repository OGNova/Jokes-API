const config = require('./config');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.mongo_name}:${config.mongo_password}@ds151558.mlab.com:51558/restify-api`);