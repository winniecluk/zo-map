var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var Artist = require('../models/artist');
var token = require('../config/token');


router.get('/countries', function(req, res, next){
  Country.find({})
    .sort({name: 1})
    .populate('artists')
    .exec(function(err, countries){
      if (err) return next(err);
      res.status(200).json(countries);
    });
})

router.get('/artists', token.checkToken, function(req, res, next){
  Artist.find({}, function(err, artists){
    res.status(200).json(artists);
  })
})

router.put('/artists', function(req, res, next){
  Artist.findOne({_id: req.query.id}, function(err, artist){
    if (err) return next(err);
    artist.approve(function(err, artist, country){
      if (err) return next(err);
      res.json({artist, country});
    }) // this closes the custom method
  }) // this closes findOne
}) // this closes route

router.put('/artists/reject', function(req, res, next){
  Artist.findOne({_id: req.query.id}, function(err, artist){
    if (err) return next(err);
    artist.reject(function(err, self, country){
      if(err) return next(err);
      res.json({artist});
    })
  });
})

router.post('/artists', function(req, res, next){
  Artist.create(req.body.newArtist, function(err, artist){
      res.status(201).send(artist);
    }
  );
})

router.delete('/artists', function(req, res, next){
  Artist.remove({approved: 2}, function(err){
    if (err) return handleError(err);
    res.status(200).send('deleted');
  })
})

module.exports = router;
