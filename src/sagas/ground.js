import { takeEvery, call, put, delay, takeLatest, throttle, take } from 'redux-saga/effects'

import {
  FILTER_SET_VALUE,
  GROUND_GET_DATA,
  GROUND_SET_SEARCH_DATA,
  GROUND_GET_SINGLE,
  GROUND_SET_SORT_VALUE,
  GROUND_HANDLE_FILTER_API,
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
      const { response, error } = yield call(callAPI, `grounds/${id}`)
      return response
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
    const response = yield call(updateApi, id)
    yield put(groundActions.getSingleSuccess(response.data))
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
function* handleFilterGround({ payload }) {
  try {
    const { response, error } = yield call(callAPI, 'grounds')

    yield put(groundActions.handleFilterAPISuccess(response.data))
  } catch (error) {
    console.log('error')

    yield put(groundActions.handleFilterAPIFail(error.message))
  }
}


function* retryApi(apiRequest, data) {
  for (let i = 1; i <= MAX_RETRIES + 1; i++) {
    console.log(i)
    try {
      const apiResponse = yield call(apiRequest, data)
      return apiResponse
    } catch (err) {
      if (err.response.status !== 404) break
      if (i < MAX_RETRIES) {
        const timeRetry = i * 2 - 1
        console.log('Retry after ', timeRetry)

        yield delay(TIME_RETRY * timeRetry)
      }
    }
  }
  throw new Error('API request failed')
}

const MAX_RETRIES = 5
const TIME_RETRY = 1000

function* groundFlow() {
  yield takeLatest(GROUND_GET_DATA, getListGround)
  yield takeLatest(GROUND_GET_SINGLE, getSingleGround)
  yield throttle(1000, GROUND_HANDLE_FILTER_API, handleFilterGround)
  yield takeEvery(FILTER_SET_VALUE, setFilterValue)
  yield takeEvery(GROUND_SET_SEARCH_DATA, setSearchValue)
  yield takeEvery(GROUND_SET_SORT_VALUE, setSortValue)
}
export default groundFlow
