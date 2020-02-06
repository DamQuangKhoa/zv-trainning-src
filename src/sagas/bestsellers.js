import { takeEvery, call, put } from 'redux-saga/effects';
import _get from 'lodash/get';
import {
  BESTSELLERS_GET_SINGLE,
  BESTSELLERS_GET_LIST,
  actions as bestsellersActions,
} from 'reducers/bestsellers';
import ClientService from '../api';

function* getSingle({ payload }) {
  const { id } = payload;
  const { response, error } = yield call(ClientService.product.get, id);

  if (error) {
    const data = _get(error, 'response.data');
    const errorMsg = data.message || error.message;
    yield put(bestsellersActions.getSingleFail(errorMsg));
  } else {
    const { data: result } = response;
    yield put(bestsellersActions.getSingleSuccess(result));
  }
}

function* getListBestSellers({ payload }) {
  const { response, error } = yield call(ClientService.product.list, payload);

  if (error) {
    const data = _get(error, 'response.data');
    const errorMsg = data.message || error.message;
    yield put(bestsellersActions.getListFail(errorMsg));
  } else {
    const {
      data: { result },
    } = response;

    yield put(bestsellersActions.getListSuccess(result));
  }
}

function* bestsellersFlow() {
  yield takeEvery(BESTSELLERS_GET_SINGLE, getSingle);
  yield takeEvery(BESTSELLERS_GET_LIST, getListBestSellers);
}

export default bestsellersFlow;
