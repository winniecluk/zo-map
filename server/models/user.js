var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String
})

// salt and hash password
// UserSchema.pre('save', function(next){
//   var user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.genSalt(saltFactor, function(err, salt){
//     bcrypt.hash(user.password, salt, function(err, hash){
//       user.password = hash;
//       next();
//     })
//   })
// })

module.exports = mongoose.model('User', userSchema);
