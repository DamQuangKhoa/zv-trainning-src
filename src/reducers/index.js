import { combineReducers } from 'redux'
import groundReducer from './ground'

const appReducer = combineReducers({
  groundReducer,
})

export default appReducer
