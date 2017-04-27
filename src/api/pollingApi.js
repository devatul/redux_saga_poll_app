import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import './defaultApi';
import * as actions from '../actions/actions';

export function* fetchPollingData() {
  try {
    const response = yield call(axios.post, 'list_polls');
    console.log(response, 'sad');
    if (response.data.error === 0) {
      yield put(actions.DATA_POLLING_SUCCESS(response));
    } else if (response.data.error === 1) {
      yield put(actions.DATA_POLLING_FAILED(response));
    }
  } catch (e) {
    // handle error if any
  }
}
