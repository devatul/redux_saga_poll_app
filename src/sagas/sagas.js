import { takeLatest } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import '../api/defaultAPI/defaultApi';
import { createSagaAsync } from '../api/loginAPI/loginApi';


export function* watchCreateLesson() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createSagaAsync);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
