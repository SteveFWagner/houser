import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import StepOne from './wizardSteps/StepOne'
import StepTwo from './wizardSteps/StepTwo'
import StepThree from './wizardSteps/StepThree'



class Wizard extends Component{
    

    render(){
        
        return(
            <div>
                <h1>Add New Listing</h1>
                <Route path="/wizard/step1" component={StepOne}/>
                <Route path="/wizard/step2" component={StepTwo}/>
                <Route path="/wizard/step3" component={StepThree}/>
                <Link to='/'><button>Cancel</button></Link>
                
            </div>
        )
    }
}



export default Wizard