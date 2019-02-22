import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateImg} from '../../dux/reducer'

class StepTwo extends Component{
    render(){
        let {updateImg} = this.props
        return(
            <div>
                <h3>Image Url</h3>
                <input onChange={(e)=>updateImg(e.target.value)}/><br/>
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        img:state.img
    }
}

export default connect(mapStateToProps,{updateImg})(StepTwo)