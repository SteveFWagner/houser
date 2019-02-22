import React from 'react'


function House(props){
    
    return(
        <div style={{border:"3px solid black", display:"flex", width:"55vw", justifyContent:"space-between", padding:"5px"}}>
            <div>
                <img src={props.img} alt='house' style={{width:"30vw", height:"auto"}}/>
            </div>
            <div>
            <p>Property Name: {props.name}</p>    
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <p>Monthly Mortgage: ${props.mortgage}</p>
            <p>Desired Rend: ${props.rent}</p>
            <p><button onClick={()=>props.handleDelete(props.id)}>Delete</button></p>
            </div>

        </div>
    )
}


export default House