var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
  name: String,
  artists: [
    {
      name: String,
      phone: String
    }
  ]
  // artists: [{type: mongoose.Schema.ObjectId, ref: 'Artist'}]
})

module.exports = mongoose.model('Country', countrySchema);
