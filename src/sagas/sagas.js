import { takeLatest } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import { createSagaAsync } from '../api/loginWorkerAPI/loginApi';


export function* watchCreateLesson() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createSagaAsync);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
