import React, {Component} from 'react'
import House from './House'


class Dashboard extends Component{

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <House/>
            </div>
        )
    }
}


export default Dashboard