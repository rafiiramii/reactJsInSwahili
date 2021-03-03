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
              <th>Time</th>
              <th>Confirm</th>
            </tr>
          </thead>

          <tbody>
            {props.bookingList.map((booking, i) => {
              return (
                <tr className={`rows ${booking.confirmed? 'confirmed': ''}`} key={i}>
                  <td>{booking.firstName}</td>
                  <td>{booking.lastName}</td>
                  <td>{booking.email}</td>
                  <td>{booking.telNumber}</td>
                  <td>{booking.cover}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={booking.confirmed}
                      onChange={() => props.markAsConfirmed(booking)}
                    />
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
