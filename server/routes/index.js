var express = require('express');
var router = express.Router();
var Country = require('../models/country');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/countries', function(req, res, next){
//   Country.find({}, function (err, countries){
//     res.status(200).json(countries);
//   })
// })

router.post('/login', function(req, res, next){
  console.log('i got the request');
  res.send('ok');
});

module.exports = router;
