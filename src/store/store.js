import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { scaleReducer } from './reducers';

const initialState = {
    data: false,
    selected: 'month',
    isLoading: true,
    hasError: true

};

export default createStore(
    scaleReducer,
    initialState,
    applyMiddleware(thunk))
