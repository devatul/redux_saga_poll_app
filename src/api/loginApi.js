import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './api';
import * as constants from '../actions/constants';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, `login?username=${action.payload.userName}&password=${action.payload.passWord}`);
    yield put(constants.USER_LOGIN_SUCCESS(response));
    return response.data;
  } catch (e) {
    yield put(constants.USER_LOGIN_ERROR);
    return e;
  }
}
