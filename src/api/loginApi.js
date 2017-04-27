import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './defaultApi';
import * as actions from '../actions/actions';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.userName}&password=${action.payload.passWord}`);
    if (response.data.error === 0) {
      yield put(actions.USER_LOGIN_SUCCESS(response));
    } else {
      yield put(actions.USER_LOGIN_FAILED(response));
    }
  } catch (e) {
    // handle error if any
  }
}
