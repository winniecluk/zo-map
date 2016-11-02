var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Country = require('./country.js');

var artistSchema = new Schema({
  f_name: String,
  l_name: String,
  phone: String,
  email: String,
  website: String,
  city: String,
  country: String,
  // have to pull country model and assign it that country id
  medium: String,
  biography: String,
  approved: Boolean
});

artistSchema.methods.approve = function(cb) {
  var self = this;
  self.approved = true;
  Country.findOne({name: self.country}, function(err, country){
    country.artists.push(self);
    country.save();
    cb(err, self, country);
  }) // closes Country.findOne
} // closes instance method

// artist = artists.findById()
// artist.populate('country')

module.exports = mongoose.model('Artist', artistSchema);
