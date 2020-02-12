import { takeEvery, call, put } from 'redux-saga/effects'
import { REQUEST, SUCCESS, ERROR } from 'common/commonConstants'
import AxiosHelper from 'axiosHelper'
import { GET_LIST_OF_USERS } from './usersConstants'
import apiPath from 'predefined/apiPath'

export function* getListOfUsers() {
  const api = new AxiosHelper().build()

  try {
    const response = yield call(api.get, apiPath.getListOfUsers)

    yield put({ type: GET_LIST_OF_USERS + SUCCESS, users: response.data })
  } catch (error) {
    yield put({ type: GET_LIST_OF_USERS + ERROR, error })
  }
}

export default function* watchGetListOfUsers() {
  yield takeEvery(GET_LIST_OF_USERS + REQUEST, getListOfUsers)
}
