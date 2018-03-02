const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');
const VerifyToken = require('../auth/VerifyToken');
const Jokes = require('../assets/jokes.js');

router.get('/dad', VerifyToken, function(req, res) {
  const token = req.headers['token'];
  const randomJoke = Jokes.dad.random();
  
  res.status(200).send(randomJoke);
});

router.get('/bad', VerifyToken, function(req, res) {
  const token = req.headers['token'];
  const randomJoke = Jokes.bad.random();

  res.status(200).send(randomJoke);
});

module.exports = router;