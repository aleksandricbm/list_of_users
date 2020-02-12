import { all } from 'redux-saga/effects'
import watchGetListOfUsers from 'Users/usersSagas'

export default function* rootSaga() {
  yield all([watchGetListOfUsers()])
}
