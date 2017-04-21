import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export function* createSagaAsync() {
  try {
    console.log('attempting to create an event');
    const response = yield call(axios.post, 'http://144.76.34.244:3333/list_users');
    console.log(response.data);
  } catch (e) {
    console.log('request failed');
    console.log(e);
  }
}

export function* watchCreateLesson() {
  console.log('redux saga is running');
  yield call(createSagaAsync);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
