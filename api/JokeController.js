const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const chalk = require('chalk');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');
const Jokes = require('../assets/JSON/jokes');

router.get('/dad', function(req, res) {
  const token = req.headers.authorization;
  if (!token) {
    console.log(`${chalk.grey('GET /api/jokes/dad')} ${chalk.yellow(401)}`);
    return res.status(401).json({ code: 401, message: 'Please supply a token.' });
  }
  User.findOne({ token: token }, function(err, user) {
    if (err) {
      console.log(`${chalk.grey('POST /api/jokes/dad')} ${chalk.red(500)} ${err}`);
      return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    }
    if (!user) {
      console.log(`${chalk.grey('GET /api/jokes/dad')} ${chalk.yellow(401)}`);
      return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });
    }

    const randomJoke = Jokes.dad.random();
    res.status(200).json({ joke: randomJoke });
    console.log(`${chalk.grey('GET /api/jokes/dad')} ${chalk.green(401)}`);
  });
});

router.get('/bad', function(req, res) {
  const token = req.headers.authorization;
  if (!token) {
    console.log(`${chalk.grey('GET /api/jokes/bad')} ${chalk.yellow(401)}`);
    return res.status(401).json({ code: 401, message: 'Please supply a token.' });
  }
  User.findOne({ token: token }, function(err, user) {
    if (err) {
      console.log(`${chalk.grey('POST /api/jokes/bad')} ${chalk.red(500)} ${err}`);
      return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    }
    if (!user) {
      console.log(`${chalk.grey('GET /api/jokes/bad')} ${chalk.yellow(401)}`);
      return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });
    }

    const randomJoke = Jokes.bad.random();
    res.status(200).json({ joke: randomJoke });
    console.log(`${chalk.grey('GET /api/jokes/bad')} ${chalk.green(401)}`);
  });
});

router.get('/nerd', function(req, res) {
  const token = req.headers.authorization;
  if (!token) {
    console.log(`${chalk.grey('GET /api/jokes/nerd')} ${chalk.yellow(401)}`);
    return res.status(401).json({ code: 401, message: 'Please supply a token.' });
  }
  User.findOne({ token: token }, function(err, user) {
    if (err) {
      console.log(`${chalk.grey('POST /api/jokes/nerd')} ${chalk.red(500)} ${err}`);
      return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    }
    if (!user) {
      console.log(`${chalk.grey('GET /api/jokes/nerd')} ${chalk.yellow(401)}`);
      return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });
    }

    const randomJoke = Jokes.nerd.random();
    res.status(200).json({ joke: randomJoke });
    console.log(`${chalk.grey('GET /api/jokes/nerd')} ${chalk.green(401)}`);
  });
});

module.exports = router;