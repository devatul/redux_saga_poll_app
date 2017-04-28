import { takeLatest } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import '../api/defaultApi';
import createSagaAsync from '../api/loginApi';
import fetchPollingData from '../api/pollingApi';


export function* watchCreateLesson() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createSagaAsync);
  yield takeLatest(constants.DATA_POLLING_REQUEST, fetchPollingData);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
