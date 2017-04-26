import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './defaultApi';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.userName}&password=${action.payload.passWord}`);
    yield put({ type: 'USER_LOGIN_SUCCESS', response });
    console.log(response);
    return response.data;
  } catch (e) {
    yield put({ type: 'USER_LOGIN_ERROR', e });
    return e;
  }
}
