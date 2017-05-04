import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';

export default function* singlePollData() {
  try {
    const response = yield call(axios.post, api.listSinglePollapi);
    if (response.data.error === 0) {
      yield put(actions.viewSinglePollSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.viewSinglePollFailed(response));
    }
  } catch (e) {
     // handle error if any
  }
}
