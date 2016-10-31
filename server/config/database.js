var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_PATH);

var db = mongoose.connection;

db.once('open', function(){
  console.log('You\'re connected!');
});

db.on('error', function(err){
  console.error('Database error :(');
});
