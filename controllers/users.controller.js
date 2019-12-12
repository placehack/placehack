const User = require('../models/user.model');
const moongose = require('mongoose');
const mailer = require('../config/mailer.config');

module.exports.login = (_, res) => {
    res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ email: email, validated: false })
    .then(user => {
      if (!user) {
        req.session.genericError = 'Wrong credentials'
        res.redirect('/login')
      }
      else {
        user.checkPassword(password)
          .then(match => {
            if (!match) {
              req.session.genericError = 'Wrong credentials'
              res.redirect('/login')
            } else {
              req.session.user = user
              res.redirect('/')
            }

          })
          .catch(next)
      }
    })
    .catch(next)

}

module.exports.new = (_,res) => {
  res.render('users/new', {user: new User() })
}

module.exports.profile = (_,res) => {
  res.render('users/profile', {user: _.currentUser })
}

module.exports.create = (req, res, next) => {
  const user = new User ({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar
  })

  user.save()
  .then((user) => {
    mailer.sendValidateEmail(user)
    res.redirect('/login')
  })
  .catch(error => {
    if (error instanceof moongose.Error.ValidationError) {
      res.render('users/new', {user, error: error.errors })
    } else if (error.code === 1100) {
      res.render ('users/new', {
        user: {
          ...user,
          password: null
        },
        genericError: 'User exist'
      })
    } else {
      next(error);
    }
  })
}