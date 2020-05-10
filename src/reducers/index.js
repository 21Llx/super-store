import {combineReducers} from 'redux'
import collect from './collect'
import cart from './cart'
import order from './order'
export default combineReducers({
  collect,
  cart,
  order
})