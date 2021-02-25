const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/signup', authController.getSignUpPage);

router.post('/signup', authController.signUpUser);

router.get('/login', authController.getLogInPage);

router.post('/login', authController.logInUser);

router.get('/logout', authController.logOutUser)

module.exports = router;
