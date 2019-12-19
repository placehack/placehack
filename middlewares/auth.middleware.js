module.exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      next()
    } else {
      console.log('User is not authenticated')
      req.session.genericError = 'User is not authenticated!'
      res.redirect('/');
    }
  }
  
  module.exports.isNotAuthenticated = (req, res, next) => {
    if (req.session.user) {
      console.log("LOGADO")
      res.redirect('/users/profile')
      //res.redirect a la pagina de perfil
    } else {
      console.log("NO LOGADO")
      next()
    }
  }
