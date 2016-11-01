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
  console.log(req.body.newArtist);
  // ask if I can use below to have better way to do this
  // var newArtist = req.body.newArtist
  Artist.create({
    f_name: req.body.newArtist.f_name,
    l_name: req.body.newArtist.l_name,
    phone: req.body.newArtist.phone,
    email: req.body.newArtist.email,
    website: req.body.newArtist.website,
    city: req.body.newArtist.city,
    country: req.body.newArtist.country,
    medium: req.body.newArtist.medium,
    biography: req.body.newArtist.biography
    }, function(err, artist){
      res.status(201).send(artist);
    }
  );
  // res.end();
})

module.exports = router;
