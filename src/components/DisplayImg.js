import React from "react";
import styled from "styled-components"

const DivImg = styled.div`
display:block;

`;


function DisplayImg(props) {
    // console.log(props)

    return (
        <DivImg>
            <h1>Title:{props.data.title}</h1>
            < img src={props.data.hdurl} alt={props.data.title} />
            <span>Date:{props.data.date}</span>
            <h3>Copyright:{props.data.copyright}</h3>
            <p>Explanation:{props.data.explanation}</p>
            <span>Service Version:{props.data.service_version}</span>


        </DivImg>
    );


}
export default DisplayImg;