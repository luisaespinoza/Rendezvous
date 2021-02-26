require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require("connect-flash")
const passport = require('./config/ppConfig');
const methodOverride = require('method-override');

const authRouter = require('./routes/auth');
const meetingRouter = require('./routes/meetings');

const app = express();

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  // a string used to generate a unique 
  // session ID cookie to share with the browser
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true 
}))

// the following two lines must appear after configuring the session
app.use(passport.initialize())
app.use(passport.session())

// FLASH
app.use(flash())
// adds a method to the req object for universal access

// Set up local variables (data that's accessible from anywhere in the app)
app.use((req, res, next) => {
  // before every route is loaded, attach flash messages and the 
  // current user to res.locals
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user

  next()
})

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', authRouter);
app.use('/meetings', meetingRouter);


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
