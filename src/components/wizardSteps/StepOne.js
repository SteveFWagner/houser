import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateName, updateAddress, updateCity,updateState,updateZip} from '../../dux/reducer'
import {Link} from 'react-router-dom'


class StepOne extends Component{
    
    render(){
        let {updateName, updateAddress, updateCity,updateState,updateZip} = this.props
        return(
            <div>
                <h3>Property Name</h3>
                <input placeholder="Enter a Name" onChange={(e)=>updateName(e.target.value)} 
                value={this.props.name}/><br/>
                <h3>Address</h3>
                <input placeholder="Enter the Street Address" onChange={(e)=>updateAddress(e.target.value)}
                value={this.props.address}/><br/>
                <h3>City</h3>
                <input placeholder="Enter the City" onChange={(e)=>updateCity(e.target.value)}
                value={this.props.city}/><br/>
                <h3>State</h3>
                <input placeholder="Enter the State" onChange={(e)=>updateState(e.target.value)}
                value={this.props.state}/><br/>                
                <h3>Zip</h3>
                <input placeholder="Enter the Zip Code" onChange={(e)=>updateZip(e.target.value)}
                value={this.props.zip}/><br/> 
                <Link to='/wizard/step2'><button>Next Step</button></Link>
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
export default connect(mapStateToProps, {updateName, updateAddress, updateCity,updateState,updateZip})(StepOne)