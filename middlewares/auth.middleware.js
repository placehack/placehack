module.exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      next()
    } else {
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


// module.exports.isAuthenticated = (req, res, next) => {
//   if (req.session.user) {
//       next()
//   } else {
//     req.session.genericError = "Need authentication"
//     res.redirect("/login")
//   }
// }

// module.exports.isNotAuthenticated = (req, res, next) => {
//   console.log("YISUS")
//   if (req.session.user) {
//     res.redirect("/login")
//   } else {
//       next()
//   }
  
// }
