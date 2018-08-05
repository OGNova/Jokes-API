const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');

const { masterToken } = require('../config.js');

router.get('/:token', function(req, res) {
  if (!req.params.masterToken) throw new Error('You must supply the master token to get info on other users.');
  if (req.params.masterToken !== masterToken) return res.status(403).send('The maze is not for you.');
  if (!req.params.token) throw new Error('Please supply a token to search for.');
  User.findOne({ token: req.params.userToken }, function(err, user) {
    if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});

router.get('/', function(req, res) {
  if (!req.params.masterToken) throw new Error('You must supply the master token to get info on other users.');
  if (req.params.masterToken !== masterToken) return res.status(403).send('The maze is not for you.');
  if (!req.params.token) throw new Error('Please supply a token to search for.');
  User.find({}, function(err, users) {
    if (err) return res.status(500).send('There was a problem finding the users.');
    res.status(200).send(users);
  });
});

module.exports = router;