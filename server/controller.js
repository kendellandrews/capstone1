const times = require('./db.json')
let timeId = 11

// get, put, post, delete

module.exports = {

    getTimes: (req, res) => {
        res.status(200).send(times)
    },

    addTimes: (req, res) => {
        
        const {time, name} = req.body

        let newTimeObj = {
            id: timeId,
            name: name,
            time: time,
        }

        times.push(newTimeObj)

        timeId++

        res.status(200).send(newTimeObj)

    },


}