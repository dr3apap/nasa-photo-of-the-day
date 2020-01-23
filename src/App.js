import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import DisplayImg from "./components/DisplayImg"

function App() {
  const [nasa, setNasa] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-01-22")
      .then(res => {
        setNasa(res.data)
        // console.log(res.data)
      })

      .catch(error => {
        // console.log("the data was requested", error)
      })

  }, [])

  return (
    <div className="App">
      <DisplayImg data={nasa} />
    </div>
  );
}

export default App;
