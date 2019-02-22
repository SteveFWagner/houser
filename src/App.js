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
        <div style={{display:'flex', justifyContent:'center', background:"#AFD4C0"}}>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
