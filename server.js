const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

// SET PUG AS VIEW TEMPLATE ENGINE
app.set('view engine', 'pug')
app.set('views', './views')

/* 
MULTIPLE STATIC DIRECTORIES
SERVING STATIC FILES WITH MIDDLEWARE FUNCTION express.static
*/
app.use(express.static('static/css'))
app.use(express.static('static/js'))
app.use(express.static('static/img'))
app.use(express.static('static/json'))
app.use(express.static('uploads'))

// MANIPULATE DATABASE USING JSON OR PUG FORM
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// APP ROUTES
const loginController = require('./controllers/loginRoutes');
app.use(loginController)
const signupController = require('./controllers/signupRoutes');
app.use(signupController)
const assetController = require('./controllers/assetRoutes');
app.use(assetController)


// LOGOUT


// NOT EXISTING ROUTES
app.get('*', (req, res) => {
  res.send('Sorry! This Resource Is Only Available With The Database Connection. Check In Next Time.')
})

// SERVER LISTENING TO REQUESTS
const port = 3000
app.listen(port, () => {
})