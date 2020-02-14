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
        type: String
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
    if(this.img){
        this.img = this.img
    }
    else{
        this.img = 'https://imgprx.livejournal.net/18f7241a35f2cc0fc1302eb0a22eab234c3550f3/0uHGJXwL6JHiMcdx7HW7LPwOPsmxHNeLbVXtGMkSPToFVVi6JuK97BBa-WgPpNZ_whwd8NTujCtBAUNk_OFPD1Y7t23jyeBwGmRGpGLAlADk6HUbvQqyrgkkYpN1qtGNka5K6D0rYdnZLMA7UqIPow'
    }
    next()
})

module.exports = mongoose.model('Listing', listingSchema)