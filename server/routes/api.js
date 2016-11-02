var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var Artist = require('../models/artist');
var token = require('../config/token')


router.get('/countries', function(req, res, next){
  Country.find({}, function(err, countries){
    res.status(200).json(countries);
  })
})

router.get('/artists', function(req, res, next){
  console.log(req.get('Authorization').split(' ')[1]);
  Artist.find({}, function(err, artists){
    res.status(200).json(artists);
    // console.log(artists);
  })
})

// router.put('/artists', function(req, res, next){
// })

router.post('/artists', function(req, res, next){
  Artist.create(req.body.newArtist, function(err, artist){
      res.status(201).send(artist);
    }
  );
})

module.exports = router;
