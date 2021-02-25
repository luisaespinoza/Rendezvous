const passport = require('../config/ppConfig');
const db = require('../models');

function getSignUpPage(req, res) {
  res.render('auth/signup');
}

function getLogInPage(req, res) {
  res.render('auth/login');
}

function signUpUser(req, res) {
  // find or create the user
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      // success
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'Account created and user logged in!'
      })(req, res)
    } else {
      // user already exists, so we redirect
      req.flash('error', 'Email already exists')
      res.redirect('/auth/signup')
    }
  }).catch(error => {
    // if an error occurs, console log the error message
    req.flash('error', error.message)
    res.redirect('/auth/signup')
  })
}

function logInUser(req, res) {
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'You have logged in!',
    failureFlash: 'Invalid username and/or password.'
  })
}

function logOutUser(req, res) {
  // .logout() is added to the req object by passport
  req.logout()
  req.flash('success', 'You have logged out!')
  res.redirect('/')
}

module.exports = {
  getLogInPage,
  getSignUpPage,
  logInUser,
  logOutUser,
  signUpUser,
}