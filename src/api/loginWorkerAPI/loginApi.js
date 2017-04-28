import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';

export function* createSagaAsync(action) {
  try {
    const response = yield call(axios.post, api.loginApi(action));
    yield put(actions.USER_LOGIN_SUCCESS(response.data));
    return response.data;
  } catch (e) {
    yield put({ type: 'USER_LOGIN_ERROR', e });
    return e;
  }
}
