import products from './products';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    mainReducer:products,
  })

const store = configureStore({
  reducer,
}) 

export default store;
