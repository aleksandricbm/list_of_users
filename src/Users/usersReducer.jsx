import { REQUEST, SUCCESS, ERROR } from 'common/commonConstants'
import { GET_LIST_OF_USERS } from './usersConstants'

const initialState = {
  isLoading: false,
  list: undefined,
}

const users = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case GET_LIST_OF_USERS + REQUEST:
    case GET_LIST_OF_USERS + ERROR:
      return { ...state, list: undefined, isLoading: true }
    case GET_LIST_OF_USERS + SUCCESS:
      return { ...state, list: action.users, isLoading: false }
    default:
      return state
  }
}

export default users
