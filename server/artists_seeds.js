require('dotenv').config();
require('./config/database');
var Artist = require('./models/artist');

Artist.remove({})
  .then(function(){
    var artist1 = new Artist({
      f_name: 'Clarissa',
      l_name: 'Bitar',
      phone: '111-111-1111',
      email: 'clarissa@ga.com',
      website: 'clarissa.com',
      city: 'Bellflower',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting',
      approved: 0
    });
    return artist1.save();
  })
  .then(function(){
    var artist2 = new Artist({
      f_name: 'Victoria',
      l_name: 'Kurtzweg',
      phone: '111-111-1111',
      email: 'clarissa@ga.com',
      website: 'clarissa.com',
      city: 'Bellflower',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting',
      approved: 0
    });
    return artist2.save();
  })
  .then(function(){
    var artist3 = new Artist({
      f_name: 'Sochin',
      l_name: 'Ancheta',
      phone: '111-111-1111',
      email: 'clarissa@ga.com',
      website: 'clarissa.com',
      city: 'Bellflower',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting',
      approved: 0
    });
    return artist3.save();
  })
  .then(function(){
    var artist4 = new Artist({
      f_name: 'Phil',
      l_name: 'Lamplugh',
      phone: '111-111-1111',
      email: 'clarissa@ga.com',
      website: 'clarissa.com',
      city: 'Bellflower',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting',
      approved: 0
    });
    return artist4.save();
  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(){
    process.exit();
  })
