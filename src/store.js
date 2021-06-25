/* eslint-disable no-unused-vars */
import { createStore, combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'

const allReducers = combineReducers({ data: loginReducer });

const store = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension() 
)

console.log(store.getState());

export default store;   