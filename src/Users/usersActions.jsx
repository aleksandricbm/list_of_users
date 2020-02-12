import { REQUEST } from 'common/commonConstants'
import { GET_LIST_OF_USERS } from './usersConstants'

export default function getListOfUsers() {
  return { type: GET_LIST_OF_USERS + REQUEST }
}
