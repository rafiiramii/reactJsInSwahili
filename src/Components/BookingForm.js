import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

import "../Layouts/Form.css"
import Table from "./BookingTable"

// let displayTable = false
const Form = () => {
  const initialValues = {
    confirmed: false,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    telNumber: "",
    cover: "",
    date: "",
    time: ""
  }
  // const [firtName, setFisrtName] = useState("")
  const [values, setValues] = useState(initialValues)
  const [bookingList, setBookingList] = useState([])
  const onChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value, id: uuidv4() })
  }

  // Notice this is the higher level component and passed to the child
  // the child only needs to call the function, rather than do the logic itself
  const markAsConfirmed = (bookingToUpdate) => {
    // I used map to have a pure function which is cleaner, but this could been
    // done by just updating the bookingToUpdate directly too
    const updatedBookings = bookingList.map(booking => {
      // update the booking if the ID matches
      if(booking.id === bookingToUpdate.id) {
        return {
          ...booking,
          confirmed: !booking.confirmed // toggle false to true and the opposite
        }
      }
      // return the booking as it is otherwise
      return booking;
    });

    setBookingList(updatedBookings)
  }

  const submitHandler = e => {
    e.preventDefault()
    setValues(initialValues)

    setBookingList(bookingList.concat(values))
  }

  // the first time am reload site
  useEffect(() => {
    if (localStorage.getItem("bookings")) {
      setBookingList(JSON.parse(localStorage.getItem("bookings")))
    }
  }, [])

  // at any time you render
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookingList))
  }, [bookingList])
  // console.log(bookingList)
  return (
    <div className="formDetails">
      <form onSubmit={submitHandler} className="bookingForm">
        <p>
          <label>First Name</label>
          <input type="text" onChange={onChange} value={values.firstName} name="firstName" />
        </p>

        <p>
          <label>Last Name</label>
          <input type="text" onChange={onChange} value={values.lastName} name="lastName" />
        </p>

        <p>
          <label>Email</label>
          <input type="email" onChange={onChange} value={values.email} name="email" />
        </p>
        <p>
          <label>Tel Number</label>
          <input type="number" onChange={onChange} value={values.telNumber} name="telNumber" />
        </p>

        <p>
          <label>Cover</label>
          <input type="number" onChange={onChange} value={values.cover} name="cover" />
        </p>
        <p>
          <label>Date</label>
          <input type="date" onChange={onChange} value={values.date} name="date" />
        </p>

        <p>
          <label>Time</label>
          <input type="time" onChange={onChange} value={values.time} name="time" />
        </p>

        <button type="submit">submit</button>
      </form>

      <div className="orders">
        {/* {!displayTable && <h3>No new booking list</h3>} */}
        <Table markAsConfirmed={markAsConfirmed} bookingList={bookingList} />
      </div>
    </div>
  )
}

export default Form
