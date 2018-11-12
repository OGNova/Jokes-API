const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const chalk = require('chalk');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('./User');

router.post('/account/register', function(req, res) {
  const token = crypto.randomBytes(5, (err, buf) => {
    if (err) {
      return res.status(500).send('There was an error registering your account. Please try again later.');
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      token: buf.toString('hex')
    }, function(err, user) {
      if (err) {
        return res.status(500).send(`There was an error registering your account. ${err}`);
      }
      return res.status(200).send(`Your account was created successfully. Your token is ${buf.toString('hex')}`);
    });
  });
});

router.delete('/account/delete', function(req, res) {
  if (!req.params.token) throw new Error('Please supply your token.');
  User.findOneAndRemove({ token: req.params.token }, function(err, user) {
    if (err) return res.status(500).send(`Something went wrong.\n${err}`);
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(`User ${user.name} was deleted`);
  });
});

router.get('/account/info', function(req, res) {
  if (!req.params.token) throw new Error('Please supply your token.');
  User.findOne({ token: req.params.token });
});

module.exports = router;