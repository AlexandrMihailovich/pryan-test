import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import store from './store/store'

import ChartContainer from './containers/ChartContainer';
import RadioContainer from './containers/RadioContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RadioContainer/>
          <ChartContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
