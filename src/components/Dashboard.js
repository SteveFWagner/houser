import React, {Component} from 'react'
import House from './House'


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses:[
                {
                id:`100`,
                name:`rosewood`,
                address:`456 tree st`,
                city:`SLC`,
                state:`UT`,
                zip:`84003`
                },
                {
                    id:`101`,
                    name:`Place`,
                    address:`123 This St`,
                    city:`Nampa`,
                    state:`ID`,
                    zip:`83686`
                    }
            ]
        }
    }

    render(){
        let mappedHouses = this.state.houses.map((house)=>{
            let {id,name,address,city,state,zip} = house
            return(
                <House key={id} name={name} address={address} city={city} state={state} zip={zip}/>
            )
        })
        return(
            <div>
                <h2>Dashboard</h2>
                {mappedHouses}
            </div>
        )
    }
}


export default Dashboard