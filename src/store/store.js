import { createStore } from 'redux';
import { scaleReducer } from './reducers';

import btcMonth from '../btc-month';
//import btcDay from '../btc-day';
//import btcYear from '../btc-year';

const initialState = {
    data: btcMonth,
    radios: [
        {
            name: 'scale',
            label: 'Year',
            value: 'year'
        },
        {
            name: 'scale',
            label: 'Month',
            value: 'month'
        },
        {
            name: 'scale',
            label: 'Day',
            value: 'day'
        }
    ],
    selected: 'month'
};

export default createStore(scaleReducer, initialState)
