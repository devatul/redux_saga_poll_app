import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';

export default function* deletePollOption(action) {
  try {
    const response = yield call(axios.post, api.deletePollOptionApi(action));
    if (response.data.error === 0) {
      yield put(actions.deletePollOptionSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.deletePollOptionFailed(response));
    }
  } catch (e) {
     // handle error if any
  }
}
