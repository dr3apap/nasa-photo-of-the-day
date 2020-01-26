import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./App.css";
import moment from "moment";
import styled from "styled-components";
import DateInput from "./components/DateInput";
import DisplayImg from "./components/DisplayImg"


const ApodImg = styled.div`
display:flex;
object-fit:scale;
padding-top 1rem;
margin-bottom:1rem
width:80%
`;

function App() {
  const [nasa, setNasa] = useState([]);
  const [date, setDate] = useState(new Date());

  const changeDate = (date) => {

    setDate(date)

    // formatDate(dateFromInput)

    // console.log(dateFromInput)
  }

  // const formatDate = moment => {
  //   let year = moment.year();
  //   let month = moment.month() + 1;
  //   let day = moment.day();
  //   return `${year}-${month}-${day}`
  // };





  useEffect(() => {
    const fetchData = () => {

      axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
        .then(res => {
          // setNasa(res.data)

          console.log(res)



        })

        .catch(error => {

          console.log("the data was requested", error)

        })


    }
    fetchData()

  }, [date])

  return (
    <ApodImg >
      <DateInput
        changeDate={changeDate}
        date={date}
      />
      <DisplayImg data={nasa} />
    </ApodImg>
  );
}

export default App;
