const times = require('./db.json')
let timeId = 1

// get, put, post, delete

module.exports = {

    getBookedTimes: (req, res) => {
        res.status(200).send(times)
    },

    addBooking: (req, res) => {
        
        const {time, fname, lname} = req.body

        let newTimeObj = {
            id: timeId,
            fname: firstName,
            lname: lastName,
            time: time,
        }

        times.push(newTimeObj)

        timeId++

        res.status(200).send(times)

    },

    deleteBooking: (req, res) => {
        const index = times.indexOf(el.id === +req.params.id)

        drinks.splice(index, 1)

        res.status(200).send(times)
    }


}