import { takeEvery, call, put } from 'redux-saga/effects'
import { GROUND_GET_DATA, GROUND_GET_SINGLE, actions as groundActions } from '../reducers/ground'
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
function* getSingleGround({ payload }) {
  const { id } = payload
  const { response, error } = yield call(callAPI, `grounds/${id}`)

  if (error) {
    // const data = _get(error, 'response.data')
    // const errorMsg = data.message || error.message
    yield put(groundActions.getSingleFail(error))
  } else {
    // const {
    //   data:  response["data"] ,
    // }

    yield put(groundActions.getSingleSuccess(response.data))
  }
}
function* groundFlow() {
  yield takeEvery(GROUND_GET_DATA, getListGround)
  yield takeEvery(GROUND_GET_SINGLE, getSingleGround)
}
export default groundFlow
