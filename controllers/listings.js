const express = require('express');
const db = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
    db.listing.find()
    .then(listings => {
        res.send(listings)
    })
})

router.get('/:category', (req, res) => {
    db.listing.find({category: req.params.category})
    .then(listings => {
        res.send(listings)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.get('/:subcategory', (req, res) => {
    db.listing.find({subcategory: req.params.subcategory})
    .then(listings => {
        res.send(listings)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.post('/new', (req, res) => {
    console.log('Hitting Post')
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