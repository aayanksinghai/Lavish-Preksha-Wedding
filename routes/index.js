const express = require('express')
const { saveGuestDetails } = require('../controllers/saveRSVP')

//Controllers
const homePage = require('../controllers/home')

//SEND Email Controllers
// const sendMail = require('../controllers/sendMail')

const route = express.Router()

//GET RESOURCE API
route.get('/', homePage)

// POST Resource
route.post('/save', saveGuestDetails)


module.exports = route

