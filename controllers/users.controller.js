const User = require('../models/user.model');
const moongose = require('mongoose');
const mailer = require('../config/mailer.config');

module.exports.login = (_, res) => {
    res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {
    const {email, password} = req.body

    if(!email || !password) {
        return res.render('users/login', {user: req.body})
    }

    User.findOne({ email: email, validated: true })
    .then(user => {
      if (!user) {
        res.render('users/login', {
          user: req.body,
          error: { password: 'invalid password' }
        })
      } else {
        return user.checkPassword(password)
          .then(match => {
            if (!match) {
              res.render('users/login', {
                user: req.body,
                error: { password: 'invalid password' }
              })
            } else {
              req.session.user = user;
            //   req.session.genericSuccess = 'Welcome!'
              res.redirect('/');
            }
          })
      }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('users/login', {
          user: req.body,
          error: error.error
        })
      } else {
        next(error);
      }
    });

}