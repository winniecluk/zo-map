var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var Artist = require('../models/artist');


router.get('/countries', function(req, res, next){
  Country.find({}, function(err, countries){
    res.status(200).json(countries);
  })
})

router.post('/artists', function(req, res, next){
  Artist.create(req.body.newArtist, function(err, artist){
      res.status(201).send(artist);
    }
  );
})

module.exports = router;
