import React from "react"
import "../Layouts/Form.css"

const Table = props => {
  const hasNoReservations = props.bookingList.length === 0
  return (
    <div className="listDetails">
      <div className="title">
        <h3>Booking List</h3>
      </div>
      {hasNoReservations ? (
        <h3>no new bookings</h3>
      ) : (
        <table className="myTable">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Tel Number</th>
              <th>Cover</th>
              <th>Date</th>
              {/* <th>Time</th> */}

              <th>Confirm</th>
            </tr>
          </thead>

          <tbody>
            {props.bookingList.map((booking, i) => {
              return (
                <tr className={`rows ${booking.seated ? "seated" : ""}`} key={i}>
                  <td>{booking.FirstName}</td>
                  <td>{booking.LastName}</td>
                  <td>{booking.Email}</td>
                  <td>{booking.TelNumber}</td>
                  <td>{booking.Cover}</td>
                  <td>{booking.Date}</td>
                  {/* <td>{booking.Time}</td> */}
                  <td>
                    <input type="checkbox" checked={booking.seated} onChange={event => props.markAsConfirmed(booking, event.target.checked)} />
                  </td>

                  <td>
                    <button type="button" onClick={e => props.deleteItem(booking, e.target)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table
