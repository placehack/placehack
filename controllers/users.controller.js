const User = require('../models/user.model');
const moongose = require('mongoose');
const mailer = require('../config/mailer.config');
const Place = require('../models/place.model'); 

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
              res.redirect('/users/profile')
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

module.exports.profile = (req,res) => {
  console.log(req.currentUser.id)
  Place.find({users: req.currentUser.id})
  .then(places => {
    console.log(places)
    res.render('users/profile', {user: req.currentUser, places })

  })
  .catch(error => {
    next(error)
  })
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

module.exports.logout = (req, res) => {
  res.clearCookie('connect.sid')
  req.session.destroy();
  res.redirect('/');
}