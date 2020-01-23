import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import DateInput from "./components/DateInput"
import DisplayImg from "./components/DisplayImg"

function App() {
  let [nasa, setNasa] = useState([]);
  let [date, setDate] = useState("");

  const changeDate = e => {
    e.preventDefault()
    let inputFromDate = e.target[0].value
    setDate(date + inputFromDate)

    console.log(e.target)
  }

  const DateInput = props => (
    <form onSubmit={props.changeDate}>
      Enter a Date (YYYY-MM-DD):
    <input />
      <input type="submit" />
    </form>

  );





  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date={query}")
      .then(res => {
        setNasa(res.data)
        // console.log(res.data)
      })

      .catch(error => {
        console.log("the data was requested", error)
      })

  }, [])

  return (
    <div className="App">
      <DateInput changeDate={changeDate} />
      <DisplayImg data={nasa} />
    </div>
  );
}

export default App;
