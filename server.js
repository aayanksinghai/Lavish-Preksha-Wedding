const createError = require('http-errors')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const path = require('path')
// const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

//used for session cookie
// const session = require("express-session");
// const passport = require("passport");
// const passportLocal = require("./utils/passport-local-strategy");
const route = express.Router()

// const MongoStore = require("connect-mongo")(session);

//flash notifications
// const flash = require("connect-flash");
// const customMWare = require("./middleware/flash");

const routes = require('./routes/index')

// Load env vars
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/assets', express.static(__dirname + '/public/assets'))
app.use('/public', express.static(__dirname + '/public'))

//mongo store is used to store the session cookie in db
// app.use(
//   session({
//     name: "nodejs-authentication",
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//       maxAge: 1000 * 60 * 100,
//     },
//     store: new MongoStore(
//       {
//         mongooseConnection: mongoose.connection,
//         autoRemove: "disabled",
//       },
//       (err) => {
//         console.log(err || "connect-mongodb setup ok");
//       }
//     ),
//   })
// );

// for passport session
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(passport.setAuthenticatedUser);

// // for flash middleware
// app.use(flash());
// app.use(customMWare.setFlash);

// defining routes
app.use('/', routes)

// 404 Page
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page  
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

const PORT = process.env.PORT || 3000

const server = app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server & exit process
    server.close(() => process.exit(1))
})