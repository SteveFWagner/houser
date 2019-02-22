import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateName, updateAddress, updateCity,updateState,updateZip} from '../dux/reducer'

class Wizard extends Component{

    render(){
        let {updateName, updateAddress, updateCity,updateState,updateZip} = this.props
        return(
            <div>
                <h1>Add a New Listing</h1>
                <h3>Property Name</h3>
                <input placeholder="Enter a Name" onChange={(e)=>updateName(e.target.value)}/><br/>
                <h3>Address</h3>
                <input placeholder="Enter the Street Address" onChange={(e)=>updateAddress(e.target.value)}/><br/>
                <h3>City</h3>
                <input placeholder="Enter the City" onChange={(e)=>updateCity(e.target.value)}/><br/>
                <h3>State</h3>
                <input placeholder="Enter the State" onChange={(e)=>updateState(e.target.value)}/><br/>
                <h3>Zip</h3>
                <input placeholder="Enter the Zip Code" onChange={(e)=>updateZip(e.target.value)}/><br/>
                <Link to='/'><button>Cancel</button></Link>
                <button>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        name:state.name,
        address:state.address,
        city:state.city,
        state:state.state,
        zip:state.zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity,updateState,updateZip}) (Wizard)