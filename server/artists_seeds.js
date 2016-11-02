require('dotenv').config();
require('./config/database');
var Artist = require('./models/artist');

Artist.remove({})
  .catch(function(err){
    console.log(err);
  })
  .then(function(){
    process.exit();
  })
