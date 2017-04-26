import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './defaultApi';
import * as actions from '../actions/actions';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.userName}&password=${action.payload.passWord}`);
    yield put(actions.USER_LOGIN_SUCCESS(response.data));
    return response.data;
  } catch (e) {
    yield put({ type: 'USER_LOGIN_ERROR', e });
    return e;
  }
}
