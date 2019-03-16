import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './App.scss';

import { Provider } from 'react-redux';

import store from './store/store'

import ChartContainer from './containers/ChartContainer';
import RadioContainer from './containers/RadioContainer'

const container = cn('container');

class App extends Component {
  render() {
    return (
      <div className={container()}>
        <Provider store={store}>

            <h1 className={container("header")}>Курс биткоина относительно доллара США</h1>

            <div className={container("select")}>
                <RadioContainer/>
                </div>

            <div className={container("chart")}>
                <ChartContainer/>
                </div>

        </Provider>
      </div>
    );
  }
}

export default App;
