var User = require('../models/user');
var jwt = require('jsonwebtoken');
var jwtSecret = 'whatever';

jwtOptions = {
  expiresIn: '1h'
};

function makeToken(req, res, next){
  console.log(req.body);
  if (!req.body.username || !req.body.password){
    return next({
      status: 401,
      message: 'Missing username and/or password'
    })
  } else {
    User.findOne({ 'username' : req.body.username })
    // now check password
      .then(function(user){
        // if (!user || !user.verifyPasswordSync(req.body.password)){
        //   return res.status(400).json({error: 'Bad credentials.'});
        // } else { // this closes the (if user does not exist) conditional
          console.log(user);
          var token = jwt.sign({user: user}, jwtSecret, jwtOptions);
          return res.json({
            token: token
        })
      // }; // this closes the elseif
    }) // this closes the then
    // now that I've found the user, here I want to make a token
    // look at jwt docs
  } // this closes the if/else
} // this closes the makeToken function

module.exports = {
  makeToken: makeToken
}
