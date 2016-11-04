var express = require('express');
var router = express.Router();
var token = require('../config/token');

router.post('/login', token.makeToken);

module.exports = router;
