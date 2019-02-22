import React from 'react'


function House(props){
    
    return(
        <div style={{background:"#DEDEDE", display:"flex", width:"55vw", justifyContent:"space-between", padding:"5px"}}>
            <div>
                <img src={props.img} alt='house' style={{width:"30vw", height:"auto"}}/>
            </div>
            <div style={{display:"flex"}}>
                <div>
                    <p>Property Name: {props.name}</p>    
                    <p>Address: {props.address}</p>
                    <p>City: {props.city}</p>
                    <p>State: {props.state}</p>
                    <p>Zip: {props.zip}</p>
                    <p>Monthly Mortgage: ${props.mortgage}</p>
                    <p>Desired Rend: ${props.rent}</p>
                </div>
                <div>
                    <button onClick={()=>props.handleDelete(props.id)} style={{border:"none"}}>
                        X
                    </button>
                </div>
            </div>

        </div>
    )
}


export default House