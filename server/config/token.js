var User = require('../models/user');
var jwt = require('jsonwebtoken');
var jwtSecret = 'whatever';

jwtOptions = {
  expiresIn: '1h'
};

function makeToken(req, res, next){
  if (!req.body.username || !req.body.password){
    return next({
      status: 401,
      message: 'Missing username and/or password'
    })
  }
  User.findOne({ 'username' : req.body.username })
  // now check password
    .then(function(user){
      if (!user || !user.verifyPasswordSync(req.body.password)){
        return res.status(400).json({error: 'Bad credentials.'});
      }
      console.log(user);
      var token = jwt.sign({user: user.username}, jwtSecret, jwtOptions);
      return res.json({
        token: token
      })
    }) // this closes the then
    // now that I've found the user, here I want to make a token
    // look at jwt docs
  // this closes the if/else
} // this closes the makeToken function

function checkToken(req, res, next){
  var token = req.get('Authorization').split(' ')[1];
  console.log(token);
  jwt.verify(token, jwtSecret, function(err, decoded){
    // if (err) return next(err);
    // req.decoded = decoded;
    next();
  })
}

module.exports = {
  makeToken: makeToken,
  checkToken: checkToken
}
