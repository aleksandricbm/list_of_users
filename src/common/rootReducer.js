import { combineReducers } from 'redux'
import common from './commonReducer'
import users from 'Users/usersReducer'

const appReducer = combineReducers({
  common,
  users,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
