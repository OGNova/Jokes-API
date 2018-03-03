const jwt = require('jsonwebtoken');

const config = require('../config');

function verifyAdminToken(req, res, next) {
  const token = req.headers['token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.'});
  if (!config.adminTokens.includes(token)) return res.status(403).send({ auth: false, message: 'The maze is not for you.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyAdminToken;