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
        <p>
          <Link to='/wizard'><button>Add New Property</button></Link>
        </p>
        {routes}
      </div>
    );
  }
}

export default App;
