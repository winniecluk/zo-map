var Artist = require('../models/artist');

module.exports = {
  all: all,
  update: approve,
  reject: reject
}

function all (req, res, next){
  Artist.find({}, function(err, artists){
    res.status(200).json(artists);
  })
}

function approve (req, res, next){
  Artist.findOne({_id: req.query.id}, function(err, artist){
    if (err) return next(err);
    artist.approve(function(err, artist, country){
      if (err) return next(err);
      res.json({artist, country});
    }) // this closes the custom method
  }) // this closes findOne
} // this closes function

function reject(req, res, next){
  Artist.findOne({_id: req.query.id}, function(err, artist){
    console.log(artist);
    if (err) return next(err);
    artist.reject(function(err, self, country){
      if(err) return next(err);
      res.json({artist});
    })
  });
}

