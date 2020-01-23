import React from "react";


function DisplayImg(props) {
    console.log(props)

    return (
        <div>
            <h1>Title:{props.data.title}</h1>
            < img src={props.data.hdurl} alt="" />
            <span>Date:{props.data.date}</span>
            <h3>Copyright:{props.data.copyright}</h3>
            <p>Explanation:{props.data.explanation}</p>
            <span>Service Version:{props.data.service_version}</span>


        </div>
    );


}
export default DisplayImg;