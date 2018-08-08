const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const chalk = require('chalk');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('./User');

router.post('/register', function(req, res) {
  const token = crypto.randomBytes(5, (err, buf) => {
    if (err) {
      console.log(`${chalk.grey('POST /api/register')} ${chalk.red(500)} ${err}`);
      return res.status(500).send('There was an error registering your account. Please try again later.');
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      token: buf.toString('hex')
    }, function(err, user) {
      if (err) {
        console.log(`${chalk.grey('POST /api/register')} ${chalk.red(500)} ${err}`);
        return res.status(500).send(`There was an error registering your account. ${err}`);
      }
      return res.status(200).send(`Your account was created successfully. Your token is ${buf.toString('hex')}`);
    });
  });
});

module.exports = router;