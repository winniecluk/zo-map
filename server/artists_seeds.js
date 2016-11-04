require('dotenv').config();
require('./config/database');
var Artist = require('./models/artist');

Artist.remove({})
  .then(function(){
    var artist1 = new Artist({
      f_name: 'Ralf',
      l_name: 'Poppcke',
      phone: '111-111-1111',
      email: 'ralf@ga.com',
      website: 'ralf.com',
      city: 'Los Angeles',
      country: 'Germany',
      medium: 'photographer',
      biography: 'I love photography.',
      approved: 0
    });
    return artist1.save();
  })
  .then(function(){
    var artist2 = new Artist({
      f_name: 'Maria Barbara',
      l_name: 'De Marco',
      phone: '111-111-1111',
      email: 'maria@ga.com',
      website: 'maria.com',
      city: 'Los Angeles',
      country: 'Italy',
      medium: 'designer',
      biography: 'I love designing.',
      approved: 0
    });
    return artist2.save();
  })
  .then(function(){
    var artist3 = new Artist({
      f_name: 'Immaculata',
      l_name: 'Ortner-Lot',
      phone: '111-111-1111',
      email: 'immaculata@ga.com',
      website: 'immaculata.com',
      city: 'Los Angeles',
      country: 'Namibia',
      medium: 'poet',
      biography: 'I love poetry.',
      approved: 0
    });
    return artist3.save();
  })
  .then(function(){
    var artist4 = new Artist({
      f_name: 'Scott',
      l_name: 'Naismith',
      phone: '111-111-1111',
      email: 'scott@ga.com',
      website: 'scottnaismith.com',
      city: 'Los Angeles',
      country: 'Scotland',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist4.save();
  })
  .then(function(){
    var artist5 = new Artist({
      f_name: 'Francesco',
      l_name: 'D\'Adamo',
      phone: '111-111-1111',
      email: 'francesco.dadamo79@gmail.com',
      website: 'francescodadamo.com',
      city: 'Los Angeles',
      country: 'Italy',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist5.save();
  })
  .then(function(){
    var artist6 = new Artist({
      f_name: 'Costentin',
      l_name: 'Marion',
      phone: '111-111-1111',
      email: 'marioncostentin@gmail.com',
      website: 'marioncostentin.com',
      city: 'Los Angeles',
      country: 'Germany',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist6.save();
  })
  .then(function(){
    var artist7 = new Artist({
      f_name: 'Belaubre',
      l_name: 'Frederic',
      phone: '111-111-1111',
      email: 'belaubref@wanadoo.fr',
      website: 'fredericbelaubre.com',
      city: 'Los Angeles',
      country: 'France',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist7.save();
  })
  .then(function(){
    var artist8 = new Artist({
      f_name: 'Vinn',
      l_name: 'Wong',
      phone: '111-111-1111',
      email: 'vinn@gmail.com',
      website: 'vinnwong.com',
      city: 'Los Angeles',
      country: 'Japan',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist8.save();
  })
  .then(function(){
    var artist9 = new Artist({
      f_name: 'Tiffanie',
      l_name: 'Mang',
      phone: '111-111-1111',
      email: 'tiffaniemangart@gmail.com',
      website: 'tiffaniemang.com',
      city: 'Los Angeles',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist9.save();
  })
  .then(function(){
    var artist10 = new Artist({
      f_name: 'Cassandra',
      l_name: 'Tondro',
      phone: '111-111-1111',
      email: 'cassandra@tondro.com',
      website: 'ctondro.com',
      city: 'Los Angeles',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist10.save();
  })
  .then(function(){
    var artist11 = new Artist({
      f_name: 'Emily',
      l_name: 'Magone',
      phone: '111-111-1111',
      email: 'emily@gmail.com',
      website: 'emilymagoneartist.wordpress.com',
      city: 'Los Angeles',
      country: 'United States',
      medium: 'painter',
      biography: 'I love painting.',
      approved: 0
    });
    return artist11.save();
  })
  .then(function(){
    var artist12 = new Artist({
      f_name: 'Heather',
      l_name: 'Offord',
      phone: '111-111-1111',
      email: 'heather@gmail.com',
      website: 'heatherofford.com',
      city: 'Los Angeles',
      country: 'United States',
      medium: 'designer',
      biography: 'I love designing.',
      approved: 0
    });
    return artist12.save();
  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(){
    process.exit();
  })
