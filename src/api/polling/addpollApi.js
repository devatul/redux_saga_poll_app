import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';


export default function* addNewPollingData(action) {
  try {
    const response = yield call(axios.post, api.addPollApi(action));
    if (response.data.error === 0) {
      yield put(actions.addNewPollSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.addNewPollFailed(response));
    }
  } catch (e) {
     // handle error if any
  }
}
