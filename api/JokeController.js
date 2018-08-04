const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');
const Jokes = require('../assets/jokes.js');

router.get('/dad', function(req, res) {
  const token = req.headers['token'];
  if (!token) throw new Error('Please supply a token.');
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).send('Something went wrong. Please try again later.');
    if (!user) return res.status(403).send('Please supply a valid token.');

    const randomJoke = Jokes.dad.random();
    res.status(200).send(randomJoke);
  });
});

router.get('/bad', function(req, res) {
  const token = req.headers['token'];
  if (!token) throw new Error('Please supply a token.');
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).send('Something went wrong. Please try again later.');
    if (!user) return res.status(403).send('Please supply a valid token.');

    const randomJoke = Jokes.bad.random();
    res.status(200).send(randomJoke);
  });
});

router.get('/nerd', function(req, res) {
  const token = req.headers['token'];
  if (!token) throw new Error('Please supply a token.');
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).send('Something went wrong. Please try again later.');
    if (!user) return res.status(403).send('Please supply a valid token.');

    const randomJoke = Jokes.nerd.random();
    res.status(200).send(randomJoke);
  });
});

module.exports = router;