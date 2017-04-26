import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../actions/constants';
import '../api';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.userName}&password=${action.payload.passWord}`);
    yield put({ type: 'USER_LOGIN_SUCCESS', response });
    return response.data;
  } catch (e) {
    yield put({ type: 'USER_LOGIN_ERROR', e });
    return e;
  }
}

export function* watchCreateLesson() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createSagaAsync);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
