const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../user/User');
const VerifyAdminToken = require('./AdminVerify');

router.delete('/:id', VerifyAdminToken, function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(500).send('There was a problem deleting the user.');
    res.status(200).send('User: '+ user.name +' was deleted.');
  });
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;