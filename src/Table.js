import React, { useState } from "react"

// let btnNotClicked = false
// let buttonText = "not arrived"
const Table = props => {
  // const [buttonText, setButtonText] = useState("Not Arrived ")
  // const [color, setColor] = useState("red")

  // const clickHandle = e => {
  //   setButtonText("seated")
  //   setColor("green")

  //   if (e.target.type === "checkbox" && !e.target.checked && e.target.n) {
  //     setButtonText("Not Arrived")
  //   } else {
  //     setButtonText("seated")
  //   }
  // }

  return (
    <div className="listDetails">
      <div className="title">
        <h3>Booking List</h3>
      </div>

      <table className="myTable">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Tel Number</th>
            <th>Cover</th>
            <th>Date</th>
            <th>Time</th>
            <th>confirm</th>
            {/* <th>{props.randomID}</th> */}
          </tr>
        </thead>

        <tbody>
          {props.bookingList.map((value, i) => {
            return (
              <tr className="rows" key={i}>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.telNumber}</td>
                <td>{value.cover}</td>
                <td>{value.date}</td>
                <td>{value.time}</td>

                <td>
                  <input
                    type="checkbox"
                    checked={value.select}
                    onChange={e => {
                      let checked = e.target.checked
                      props.setBookingList(
                        props.bookingList.map(data => {
                          if (value.id === data.id) {
                            data.select = checked
                          }
                          return data
                        })
                      )
                    }}
                  />

                  {/* <button
                    onClick={e => {
                      let clicked = e.target.clicked

                      props.setBookingList(
                        props.bookingList.map(data => {
                          if (value.id === data.id) {
                            setButtonText(buttonText)
                            data.select = clicked
                            setButtonText("arrived")
                          }
                          return data
                        })
                      )
                    }}
                    clicked={value.select}
                  >
                    {buttonText}
                  </button> */}
                </td>
                {/* <td> */}
                {/* <button
                    style={{ color: color }}
                    onClick={() => {
                      setButtonText("seated")
                      setColor("green")
                    }}
                  >
                    {buttonText}
                  </button> */}
                {/* <button style={{ color: color }} onClick={clickHandle}>
                    {buttonText}
                  </button> */}
                {/* <input type="checkbox" onChange={clickHandle} />
                  <label>{buttonText}</label>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
