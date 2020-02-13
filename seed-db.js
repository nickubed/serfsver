const db = require('./models')

db.listing.create({
    title: 'Rat catcher needed',
    img: 'http://placekitten.com/200/200',
    desc: 'I need a rat catcher and I need one fast. My lord released a bunch of plague rats in the streets because he thought they would raise morale and be good pets among the serfs, but all they do is bite!',
    price: 2,
    replyTo: 'Serf 786',
    category: 'Gigs',
    subCategory: 'Domestic'
})