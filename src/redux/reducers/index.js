import { combineReducers } from 'redux'
import todoReducer from './todo';

export default combineReducers({
  todo: todoReducer,
  // auth
  // user
  // cart
})