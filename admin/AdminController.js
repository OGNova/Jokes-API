const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');

router.get('/:token', function(req, res) {
  User.findOne({ token: req.params.token }, function(err, user) {
    if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.status(500).send('There was a problem finding the users.');
    res.status(200).send(users);
  });
});

module.exports = router;