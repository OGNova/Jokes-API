const express = require('express');
const morgan = require('morgan');

const db = require('./db');
require('./modules/Prototypes.js');

const logger = morgan('dev');

const app = express();

app.use(logger);

const UserController = require('./user/UserController');
app.use('/api', UserController);

const AdminController = require('./admin/AdminController');
app.use('/api/admin', AdminController);

const JokesController = require('./api/JokeController');
app.use('/api/jokes', JokesController);

module.exports = app;