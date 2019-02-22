import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Wizard extends Component{

    render(){
        return(
            <div>
                <h1>Add a New Listing</h1>
                <h3>Property Name</h3>
                <input placeholder="Enter a Name"/><br/>
                <h3>Address</h3>
                <input placeholder="Enter the Street Address"/><br/>
                <h3>City</h3>
                <input placeholder="Enter the City"/><br/>
                <h3>State</h3>
                <input placeholder="Enter the State"/><br/>
                <h3>Zip</h3>
                <input placeholder="Enter the Zip Code"/><br/>
                <Link to='/'><button>X</button></Link>
                <button>Complete</button>
            </div>
        )
    }
}


export default Wizard