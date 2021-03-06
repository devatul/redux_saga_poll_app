import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';

export default function* userListAsync() {
  try {
    const response = yield call(axios.post, api.listUserapi);
    if (response.data.error === 0) {
      yield put(actions.viewUserListSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.viewUserListFailed(response));
    }
  } catch (e) {
      // handle error if any
  }
}
