const express = require('express')

//Controllers
const homePage = require('../controllers/home')

//SEND Email Controllers
// const sendMail = require('../controllers/sendMail')

const route = express.Router()

//GET RESOURCE API
route.get('/', homePage)

module.exports = route

