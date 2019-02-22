import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import {Link} from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{display:'flex', justifyContent:'center'}}>
          {routes}
          <p>
            <Link to='/wizard/step1'><button>Add New Property</button></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
