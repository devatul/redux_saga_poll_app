import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../api';

export default function* editTitle(action) {
  try {
    const response = yield call(axios.post, api.editPollTitleApi(action));
    if (response.data.error === 0) {
      yield put(actions.addNewTitleSuccess(response));
    } else if (response.data.error === 1) {
      yield put(actions.addNewTitleFailed(response));
    }
  } catch (e) {
     // handle error if any
  }
}
