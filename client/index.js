const baseUrl = 'http://localhost:5501'

const showTimes = document.querySelector('#welcomeDisplay')

const getAllBooked = () => {
    axios.get(`${baseUrl}/getBookedTimes`)
        .then((res) => {
            displayBookings(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })




const deleteBooking = (id) => {
    axios.delete(`${baseUrl}/${id}`)
        .then((res) => {
            booking.innerHTML = ''
            displayBookings(res.data)

        })



}

getAllTimes()}

