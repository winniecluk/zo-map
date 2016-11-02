var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var Artist = require('../models/artist');
var token = require('../config/token')


router.get('/countries', function(req, res, next){
  Country.find({})
    .sort({name: 1})
    .populate('artists')
    .exec(function(err, countries){
      if (err) return next(err);
      res.status(200).json(countries);
    });
})

router.get('/artists', function(req, res, next){
  console.log(req.get('Authorization').split(' ')[1]);
  Artist.find({}, function(err, artists){
    res.status(200).json(artists);
    // console.log(artists);
  })
})

router.put('/artists', function(req, res, next){
  console.log(req.query.approve);
  console.log(req.query.id);
  Artist.findOne({_id: req.query.id}, function(err, artist){
    if (err) return next(err);
    artist.approve(function(err, artist, country){
      if (err) return next(err);
      res.json({artist, country});
    })
  })
  // console.log('artistId is this kind of data: ' + typeof(req.body.artistId));
  // now I want to update the artist status
})

router.post('/artists', function(req, res, next){
  Artist.create(req.body.newArtist, function(err, artist){
      res.status(201).send(artist);
    }
  );
})

module.exports = router;
