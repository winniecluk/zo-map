var express = require('express');
var router = express.Router();
var Country = require('../models/country');


router.get('/countries', function(req, res, next){
  Country.find({}, function(err, countries){
    res.status(200).json(countries);
  })
})

module.exports = router;
