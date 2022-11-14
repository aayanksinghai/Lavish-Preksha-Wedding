const Contact = require('../models/Contact')
const path = require('path')
const dotenv = require('dotenv')

//@desc Save Guest Details
//@route POST /save
//@access Public
exports.saveGuestDetails = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        console.log(req.body.name);
        console.log(req.body.email);
        // res.status(201).render('/');
        return res.redirect('/')  
    } 
    catch (err) {
        console.error(err)
        return res.status(400).json({ success: false, message: `Application Failed: ${err.message} Please try again!`})
    }
    
}