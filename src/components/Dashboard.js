import React, {Component} from 'react'
import House from './House'
import Axios from 'axios';
import {Link} from 'react-router-dom'


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
                <div style={{margin:"10px"}}>
                    <House key={id} name={name} address={address} city={city} state={state} zip={zip}
                    id={id} img={img} mortgage={mortgage} rent={rent} handleDelete={this.handleDelete}/>
                </div>
            )
        })
        return(
            <div style={{background:"#E5F4EC"}}>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <h2 style={{fontSize:"50px",margin:"0px"}}>Dashboard</h2>
                    <Link to='/wizard/step1'>
                        <button style={{border:"none", background:"#8AEA92", fontSize:"20px", 
                         boxSizing:"border-box", fontWeight:"bold", margin:"10px"}}>
                            Add New Property
                        </button>
                    </Link>
                </div>
                <h2 style={{paddingLeft:"30px"}}>Home Listings</h2>
                    {mappedHouses}
            </div>
        )
    }
}


export default Dashboard