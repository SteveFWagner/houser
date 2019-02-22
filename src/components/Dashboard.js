import React, {Component} from 'react'
import House from './House'
import Axios from 'axios';


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses:[]
        }
        this.handleDelete=this.handleDelete.bind(this)
        // this.handleGet=this.handleGet.bind(this)
    }

    handleGet(){
        Axios.get('/api/houses').then(res =>{
            this.setState({
                houses:res.data
            })
        })
    }
    componentDidMount(){
        this.handleGet()
    }
    handleDelete=(id)=>{
        Axios.delete(`/api/house/${id}`).then(
            this.handleGet()
        )
    }

    render(){
        console.log('state@Dash',this.state)
        let mappedHouses = this.state.houses.map((house)=>{
            let {id,name,address,city,state,zip,img,mortgage,rent} = house
            return(
                <House key={id} name={name} address={address} city={city} state={state} zip={zip}
                id={id} img={img} mortgage={mortgage} rent={rent} handleDelete={this.handleDelete}/>
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