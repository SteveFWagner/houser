import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Wizard/>
      </div>
    );
  }
}

export default App;
