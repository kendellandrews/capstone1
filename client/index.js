const baseUrl = 'http://localhost:4000'


//Step 1: select HTML elements
const bookedBtn = document.getElementById('bookedBtn')



//Step 2: write funtion


const getAllBooked = () => {
    axios.get(`/api/getBookedTimes`)
        .then((res) => {
            const data = res.data;
            for(let i = 0; i < data.length; i++) {
                console.log(data[i].time);
            }
        })
        .catch((err) => {
            console.log(err)
        });
}

const addBooking = (event) => {
    event.preventDefault();
    const fname = document.querySelector('#fname')
    const lname = document.querySelector('#lname')
    const time = document.querySelector('#time')
    const subject = document.querySelector('#subject')
    const obj = {
        time: time.value,
        fname: fname.value,
        lname: lname.value,
        subject: subject.value,

    }

    axios.post(`/api/addBooking`, obj)
        .then((res) => {
            const data = res.data;
            console.log(data);
        })
        .catch((err) => {
            console.log(err)
        });
}



const deleteBooking = (id) => {
    axios.delete(`/api/deleteBooking/${id}`)
        .then((res) => {
            booking.innerHTML = ''
            displayBookings(res.data)

        })
}

//Step 3: add event listioner 

bookedBtn.addEventListener('click', getAllBooked)
document.querySelector('form').addEventListener('submit', addBooking)
// document.querySelector('#delete').addEventListener('click', deleteBooking)