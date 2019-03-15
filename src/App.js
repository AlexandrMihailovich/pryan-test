import React, { Component } from 'react';
import './App.css';

import Chart from './components/Chart';
import Radio from './components/RadioSelector'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Radio name={'space'} count={8}/>
        <Chart/>
      </div>
    );
  }
}

export default App;
