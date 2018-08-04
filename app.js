const express = require('express');
const db = require('./db');
require('./modules/Prototypes.js');

const app = express();

const UserController = require('./user/UserController');
app.use('/api', UserController);

const AdminController = require('./admin/AdminController');
app.use('/api/admin', AdminController);

const JokesController = require('./api/JokeController');
app.use('/api/jokes', JokesController);

module.exports = app;