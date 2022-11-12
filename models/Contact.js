const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({ 

    name: {
        type: String
    },

    email: {
        type: String
    },

    invite: {
        type: Boolean
    }
})

module.exports = mongoose.model('Contact', ContactSchema)