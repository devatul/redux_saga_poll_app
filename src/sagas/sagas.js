import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../actions/constants';
import '../api';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.username}&password=${action.payload.password}`);
    yield put({ type: 'LOGIN_REQUEST', response });
    return response.data;
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
    return e;
  }
}

export function* watchCreateLesson() {
  const recievedData = yield takeLatest(constants.Login, createSagaAsync);
  return recievedData;
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
