var User = require('../models.user');
var jwt = require('jsonwebtoken');
var secret = 'whatever';

jwtOptions = {
  expiresIn: '1h'
};

