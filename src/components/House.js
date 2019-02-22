import React from 'react'


function House(props){
    return(
        <div style={{border:"3px solid black"}}>
            <p>Property Name: {props.name}</p>    
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
        </div>
    )
}


export default House