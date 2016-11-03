var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String
})

userSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', userSchema);
