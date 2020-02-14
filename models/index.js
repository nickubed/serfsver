const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/serfslist',
    { useNewUrlParser: true });

module.exports.listing = require('./listing');
