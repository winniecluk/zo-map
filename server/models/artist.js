var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

// artist = artists.findById()
// artist.populate('country')

module.exports = mongoose.model('Artist', artistSchema);
