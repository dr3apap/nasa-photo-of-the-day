import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput(props) {

    return (
        <div>
            Enter a Date (YYYY-MM-DD):
            <DatePicker selected={props.date}
                onChange={props.changeDate}

                dateFormat="yyyy/MM/dd"

            // onChange={date => setDate(date)}
            />



            {/* <form onSubmit={props.changeDate}>
                Enter a Date (YYYY-MM-DD):
     <input />
                <input type="submit" />
            </form> */}


        </div>
    )

}