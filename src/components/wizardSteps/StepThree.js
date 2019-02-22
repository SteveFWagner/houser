import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateMortgage, updateRent} from '../../dux/reducer'

class StepThree extends Component{
    handlePost(){
        let {name,address,city,state,zip,img,mortgage,rent} = this.props
        Axios.post('/api/house',{name,address,city,state,zip,img,mortgage,rent}).then(
            this.props.history.push('/')
        )
    }
    render(){
        let {updateMortgage,updateRent} = this.props
        let recRent = this.props.mortgage*1.25
        return(
            <div>
                <h5>Reccomended Rent:${recRent}</h5>
                <h4>Monthly Mortgage Amount</h4>
                <input onChange={(e)=>updateMortgage(e.target.value)}/>
                <h4>Desired Monthy Rent</h4>
                <input onChange={(e)=>updateRent(e.target.value)}/><br/>
                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                <button onClick={()=>this.handlePost()}>Complete</button>
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
        zip:state.zip,
        img:state.img,
        mortgage:state.mortgage,
        rent:state.rent
    }
}

export default connect(mapStateToProps,{updateMortgage,updateRent})(StepThree)