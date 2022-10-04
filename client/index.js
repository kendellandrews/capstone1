const baseUrl = 'http://localhost:5501'

const showTimes = document.querySelector('#welcomeDisplay')

// Axios request to get times
// loop over that array
// create drink cards for each item in the array

const displayTimes = (arr) => {
   let grid = document.querySelector('#darkened')
   grid.style.display= 'flex'
    // for(let i = 0; i < arr.length; i++) {
    //     createBooking(arr[i])
}

const createBooking = (time) => {
    const booking = document.createElement('booking')
    booking.classList.add('booked')

    booking.innerHTML =`
        <p>${time}</p>

        <section>   
            <button>ADD</button>
            <button onclick="deleteBooking(${time.id})">Cancel</button>
        </section>

        <br><br/>
    `
    showBookings.appendChild(booking)
}

const deleteBooking = (id) => {
    axios.delete(`${baseUrl}/${id}`)
        .then((res) => {
            booking.innerHTML = ''
            displayBookings(res.data)

        })



const getAllTimes = () => {
    axios.get(`${baseUrl}/getTimes`)
        .then((res) => {
            displayBookings(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

getAllTimes()}

documentElement.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("data-dropdown-button");
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-drop].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })

})