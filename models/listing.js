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

listingSchema.pre('save', function(next, docs) {
    this.category = this.category.toLowerCase()
    this.subCategory = this.subCategory.toLowerCase()
    next()
})

module.exports = mongoose.model('Listing', listingSchema)