import React from "react"
import "../Layouts/Form.css"

const Table = props => {
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
            <th>Confirm</th>
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
