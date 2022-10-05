const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'));
})
app.use(express.static(path.join(__dirname, '../client')));

const {
    getBookedTimes,
    addBooking,
    deleteBooking,
} = require('./controller')

app.get('/api/getBookedTimes', getBookedTimes)
app.post('/api/addBooking', addBooking)
app.delete('/api/deleteBooking/:id', deleteBooking)

app.listen(4000, () => console.log('listening on port 4000'))