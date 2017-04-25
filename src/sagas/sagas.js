import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import '../api';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.username}&password=${action.password}`);
    yield put({ type: 'LOGIN_REQUEST', response });
    return response.data;
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
    return e;
  }
}

export function* watchCreateLesson() {
  const recievedData = yield takeLatest('Login', createSagaAsync);
  return recievedData;
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
