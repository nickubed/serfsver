const express = require('express');
const db = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
    db.listing.find()
    .then(listings => {
        res.send(listings)
    })
})

router.post('/new', (req, res) => {
    db.listing.create(req.body)
    .then(listing => {
        res.send(listing)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router;