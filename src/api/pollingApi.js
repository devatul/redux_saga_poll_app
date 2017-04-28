import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './defaultApi';
import * as actions from '../actions/actions';

export default function* fetchPollingData() {
  try {
    const response = yield call(axios.post, 'list_polls');
    if (response.data.error === 0) {
      yield put(actions.dataPollingSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.dataPollingFailed(response));
    }
  } catch (e) {
    // handle error if any
  }
}
