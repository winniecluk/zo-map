var express = require('express');
var router = express.Router();
var Country = require('../models/country');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/artists', function(req, res, next){
  console.log(req.body.newArtist);
  res.status(200).send('hello world');
  res.end();
})

router.get('/countries', function(req, res, next){
  Country.find({}, function (err, countries){
    res.status(200).json(countries);
  })
})

module.exports = router;
