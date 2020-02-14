const express = require('express')

const app = express();
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use('/listing', require('./controllers/listings.js'))

app.get('/', (req, res) => {
    res.send('Serfslist Server')
})

app.get('*',(req, res) => {
    res.send('404')
})

app.listen(process.env.PORT || 3000)
