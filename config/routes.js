const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const placesController = require('../controllers/places.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const generalController = require('../controllers/general.controller')
//const multer = require('multer')
//const upload = multer({ dest: './public/uploads/' })
//const uploadCloud = require('../config/cloudinary.config.js');
//const passport = require('passport')


module.exports = router;

// router.get('/users/new', authMiddleware.isNotAuthenticated, usersController.new)
router.get('/users/profile', authMiddleware.isAuthenticated, usersController.profile)
router.post('/users', authMiddleware.isNotAuthenticated, usersController.create)

router.get('/', generalController.index)

router.get('/login', authMiddleware.isNotAuthenticated, usersController.login)
router.post('/login', authMiddleware.isNotAuthenticated, usersController.doLogin) 

router.get('/search-random', placesController.random)
// router.get('/search', usersController.search)
