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
  approved: {type: Number, default: 0}
});

artistSchema.methods.approve = function(cb) {
  var self = this;
  Country.findOne({name: self.country}, function(err, country){
    if (!country.artists.includes(self._id)){ // this does not work yet
      self.approved = 1;
      self.save();
      country.artists.push(self);
      country.save();
    }
    cb(err, self, country);
  }) // closes Country.findOne
} // closes instance method

module.exports = mongoose.model('Artist', artistSchema);
