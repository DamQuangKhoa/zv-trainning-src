import { takeEvery, call, put, delay } from 'redux-saga/effects'
import {
  FILTER_SET_VALUE,
  GROUND_GET_DATA,
  GROUND_SET_SEARCH_DATA,
  GROUND_GET_SINGLE,
  GROUND_SET_SORT_VALUE,
  actions as groundActions,
} from '../reducers/ground'
import callAPI from '../utils/api'
function* getListGround() {
  const { response, error } = yield call(callAPI, 'grounds')

  if (error) {
    // const data = _get(error, 'response.data')
    // const errorMsg = data.message || error.message
    yield put(groundActions.getListFail(error))
  } else {
    // const {
    //   data:  response["data"] ,
    // }

    yield put(groundActions.getListSuccess(response.data))
  }
}

function* updateApi(id) {
  for (let i = 0; i < 5; i++) {
    try {
      const apiResponse = yield call(callAPI, `grounds/${id}`)
      yield put(groundActions.getSingleSuccess(apiResponse.data))
      // return apiResponse
    } catch (err) {
      if (i < 4) {
        yield delay(2000)
      }
    }
  }
  // attempts failed after 5 attempts
  throw new Error('API request failed')

  // if (error) {
  //   // const data = _get(error, 'response.data')
  //   // const errorMsg = data.message || error.message
  //   yield put(groundActions.getSingleFail(error))
  // } else {
  //   // const {
  //   //   data:  response["data"] ,
  //   // }
}
export function* getSingleGround({ payload }) {
  const { id } = payload

  try {
    const apiResponse = yield call(updateApi, id)
    yield put({
      type: 'UPDATE_SUCCESS',
      payload: apiResponse.body,
    })
  } catch (error) {
    yield put(groundActions.getSingleFail(error.message))
    // yield put({
    //   type: 'UPDATE_ERROR',
    //   error,
    // })
  }
}
function* setSearchValue({ payload }) {
  const { value } = payload
  yield put(groundActions.setSearchValue(value))
}
function* setFilterValue({ payload }) {
  const { value } = payload
  yield put(groundActions.setFilterValueSuccess(value))
}

function* setSortValue({ payload }) {
  // const { value } = payload

  yield put(groundActions.setSortValueSuccess(payload))
}
function* groundFlow() {
  yield takeEvery(GROUND_GET_DATA, getListGround)
  yield takeEvery(GROUND_GET_SINGLE, getSingleGround)
  yield takeEvery(FILTER_SET_VALUE, setFilterValue)
  yield takeEvery(GROUND_SET_SEARCH_DATA, setSearchValue)
  yield takeEvery(GROUND_SET_SORT_VALUE, setSortValue)
}
export default groundFlow
