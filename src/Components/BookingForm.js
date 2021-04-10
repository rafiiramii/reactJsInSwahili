import React, { useState, useEffect } from "react"
import axios from "axios"

import "../Layouts/Form.css"
import Table from "./BookingTable"

const Form = () => {
  const initialValues = {
    seated: false,
    id: "",
    FirstName: "",
    LastName: "",
    Email: "",
    TelNumber: "",
    Cover: "",
    Date: ""
  }
  const [values, setValues] = useState(initialValues)
  const [bookingList, setBookingList] = useState([])
  const onChange = e => {
    console.log(e.target)
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const markAsSeated = async (bookingToUpdate, value) => {
    const bookingId = bookingToUpdate.id
    const updatedBooking = {
      ...bookingToUpdate,
      seated: value
    }
    await axios.put(`http://localhost:1437/bookings/${bookingId}`, updatedBooking)

    const updatedBookings = bookingList.map(booking => {
      // update the booking if the ID matches
      if (booking.id === updatedBooking.id) {
        return updatedBooking
      }
      // return the booking as it is otherwise
      return booking
    })
    setBookingList(updatedBookings)
  }

  // submit
  const submitHandler = async e => {
    e.preventDefault()
    setValues(initialValues)
    const { data } = await axios.post("http://localhost:1437/bookings", values)
    console.log(data)
    setBookingList(bookingList.concat(values))
  }
  // delete items
  const deleteItem = async (bookingToUpdate, value) => {
    const bookingId = bookingToUpdate.id
    const updatedBooking = {
      ...bookingToUpdate,
      seated: value
    }
    console.log(bookingId)

    await axios.delete(`http://localhost:1437/bookings/${bookingId}`, updatedBooking)

    setBookingList(prev => prev.filter(booking => booking.id != updatedBooking.id))
  }
  // end delete
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:1437/bookings")
      setBookingList(data)
    }

    fetchData()
  }, [])
  return (
    <div className="formDetails">
      <form onSubmit={submitHandler} className="bookingForm">
        <p>
          <label>First Name</label>
          <input type="text" onChange={onChange} value={values.FirstName} name="FirstName" />
        </p>

        <p>
          <label>Last Name</label>
          <input type="text" onChange={onChange} value={values.LastName} name="LastName" />
        </p>

        <p>
          <label>Email</label>
          <input type="email" onChange={onChange} value={values.Email} name="Email" />
        </p>
        <p>
          <label>Tel Number</label>
          <input type="tel" onChange={onChange} value={values.TelNumber} name="TelNumber" />
        </p>

        <p>
          <label>Cover</label>
          <input type="text" onChange={onChange} value={values.Cover} name="Cover" />
        </p>
        <p>
          <label>Date</label>
          <input type="date" onChange={onChange} value={values.Date} name="Date" />
        </p>

        <button type="submit">submit</button>
      </form>

      <div className="orders">
        <Table markAsConfirmed={markAsSeated} deleteItem={deleteItem} bookingList={bookingList} />
      </div>
    </div>
  )
}

export default Form
