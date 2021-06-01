import { combineReducers } from 'redux'
import HeaderReducer from './../common/header/store/reducer'

const reducer = combineReducers({
  header:HeaderReducer
})

export default reducer
