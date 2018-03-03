const express = require('express');
const app = express();
const db = require('./db');
require('./modules/Prototypes.js');

const UserController = require('./user/UserController');
app.use('/users', UserController);

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

const JokeController = require('./api/JokeController');
app.use('/api/jokes', JokeController);

const AdminController = require('./admin/AdminController');
app.use('/admin', AdminController);

module.exports = app;