// import logo from "./logo.svg"
import "../Layouts/Form.css"
import Form from "./BookingForm"
function App() {
  return (
    <div className="homePage">
      <div className="welcomeText">
        <h1>Restaurant booking form...</h1>
        <p>Welcome to reserve your seat and let us do the rest for you..!!</p>
      </div>
      <Form />
    </div>
  )
}

export default App
