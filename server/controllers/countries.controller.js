var Country = require('../models/country');

module.exports = {
  all: all
}

function all (req, res, next){
  Country.find({})
    .sort({name: 1})
    .populate('artists')
    .exec(function(err, countries){
      if (err) return next(err);
      res.status(200).json(countries);
    });
}
