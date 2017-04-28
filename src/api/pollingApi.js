import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../actions/actions';
import * as api from './api';

export default function* fetchPollingData(action) {
  console.log(action);
  try {
    const response = yield call(axios.post, api.viewPollAPI);
    console.log(response);
    if (response.data.error === 0) {
      yield put(actions.dataPollingSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.dataPollingFailed(response));
    }
  } catch (e) {
     // handle error if any
  }
}
