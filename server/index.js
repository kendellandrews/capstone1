const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getBookedTimes,
    addBooking,
    deleteBooking,
} = require('./controller')

app.get('/getBookedTimes', getBookedTimes)
app.post('/addBooking', addBooking)
app.delete('/deleteBooking/:id', deleteBooking)

app.listen(5501, () => console.log('listening on port 5501'))