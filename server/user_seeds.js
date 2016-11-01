require('dotenv').config();
require('./config/database');
var User = require('./models/user');

var admin = {username: 'admin', password: 'admin'};

User.remove({})
  .then(function(){
    return User.create(admin);
  }).catch(function(err){
    console.log(err);
  }).then(function(){
    process.exit();
  });
