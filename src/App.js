import logo from "./logo.svg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Form from "./Form"
import Table from "./Table"
import SeatingPage from "./SeatingPage"

function App() {
  return (
    <div className="homePage">
      <div className="welcomeText">
        <h1>Restaurant booking form...</h1>
        <p>Welcome to reserve your seat and let us do the rest for you..!!!</p>
      </div>
      <Form />
    </div>
  )
}

export default App
