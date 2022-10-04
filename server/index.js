const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getTimes,
    addTimes
} = require('./controller')

app.get('/getTimes', getTimes)
app.post('/addTimes', addTimes)

app.listen(5501, () => console.log('listening on port 5501'))