import groundFlow from './ground'
import { all } from 'redux-saga/effects'
// src/index-sagas.js

const appSagas = function*() {
  yield all([groundFlow()])
}

export default appSagas
