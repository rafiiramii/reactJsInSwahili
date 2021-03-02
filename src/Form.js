import React, { useState, useEffect } from "react"
// import uuid from "uuid/v4"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import Table from "./Table"

let displayTable = false
// let randomID = Math.floor(Math.random() * 1000)
const Form = () => {
  const initialValues = {
    select: false,
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

  // const [myID, setID] = useState("")
  const [bookingList, setBookingList] = useState([])
  const onChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value, id: uuidv4() })
  }

  const submitHandler = e => {
    e.preventDefault()
    setValues(initialValues)
    setBookingList(bookingList.concat(values))

    // values.id = randomID
    // table list title
    displayTable = true
    // setID(myID)
  }
  // console.log(h2)
  // for localstorage
  useEffect(() => {
    if (localStorage.getItem("bookings")) {
      setBookingList(JSON.parse(localStorage.getItem("bookings")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookingList))
  }, [bookingList])

  return (
    <div className="formDetails">
      <form onSubmit={submitHandler} className="bookingForm">
        {/* <h2 onChange={onChange} value={randomID}>
          {randomID}
        </h2> */}
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
        {/* <input onChange={onChange} value={values.id} name="id"></input> */}

        <button type="submit">submit</button>
      </form>

      <div className="orders">
        {!displayTable && <h3>NO NEW BOOKING ADDED</h3>}
        {displayTable && <Table bookingList={bookingList} setBookingList={setBookingList} values={values} />}
      </div>
    </div>
  )
}

export default Form
