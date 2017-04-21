import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export function* createSagaAsync(action) {
  try {
    console.log(action, 'attempting to create an event');
    const response = yield call(axios.post, `http://144.76.34.244:3333/login?username=${action.username}&password=${action.password}`);

    console.log(response.data.data);
    yield put({ type: 'Login_Success', response });
    return response.data;
  } catch (e) {
    yield put({ type: 'Login_Error', e });
    return e;
  }
}

export function* watchCreateLesson() {
  console.log('redux saga is running');
  const recievedData = yield takeLatest('Login', createSagaAsync);
  return recievedData;
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
