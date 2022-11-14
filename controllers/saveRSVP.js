const Contact = require('../models/Contact')
const path = require('path')
const dotenv = require('dotenv')

//@desc Save Guest Details
//@route POST /save
//@access Public
exports.saveGuestDetails = async (req, res) => {
    try {
        //via WEB APP
         const dataObj = JSON.parse(req.body);
         console.log(dataObj)

        
        //  const myData = new Contact({
        //     name: req.body.name,
        //     email: req.body.email
        //  });

        //  console.log(myData);

         
        //via POSTMAN
        // const dataObj = req.body
        // console.log(dataObj)
        
        const contact = await Contact.create(dataObj);
        res.status(201).json({ success: true, message: `Your Attendance has been received!` })      
    } 
    catch (err) {
        console.error(err)
        return res.status(400).json({ success: false, message: `Application Failed: ${err.message} Please try again!`})
    }
    
}