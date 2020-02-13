const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    replyTo: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String
    }
})

module.exports = mongoose.model('Listing', listingSchema)