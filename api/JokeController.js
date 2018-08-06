const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');
const Jokes = require('../assets/JSON/jokes');

router.get('/dad', function(req, res) {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ code: 401, message: 'Please supply a token.' });
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    if (!user) return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });

    const randomJoke = Jokes.dad.random();
    res.status(200).json({ joke: randomJoke });
  });
});

router.get('/bad', function(req, res) {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ code: 401, message: 'Please supply a token.' });
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    if (!user) return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });

    const randomJoke = Jokes.bad.random();
    res.status(200).json({ joke: randomJoke });
  });
});

router.get('/nerd', function(req, res) {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ code: 401, message: 'Please supply a token.' });
  User.findOne({ token: token }, function(err, user) {
    if (err) return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
    if (!user) return res.status(403).json({ code: 403, message: 'Please supply a valid token.' });

    const randomJoke = Jokes.nerd.random();
    res.status(200).json({ joke: randomJoke });
  });
});

module.exports = router;