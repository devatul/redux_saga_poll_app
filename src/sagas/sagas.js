import { takeLatest } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import createSagaAsync from '../api/loginWorkerAPI/loginApi';
import signupAsync from '../api/loginWorkerAPI/signupApi';
import userListAsync from '../api/loginWorkerAPI/userlistApi';
import fetchPollingData from '../api/pollingApi';
import submitPollingData from '../api/polling/submitpoll';
import addNewPollingData from '../api/polling/addpollApi';
import addNewOption from '../api/polling/addoptionApi';
import deletePollData from '../api/polling/deletepollApi';
import deletePollOption from '../api/polling/deletepolloptionApi';
import editTitle from '../api/polling/updatetitleApi';
import singlePollData from '../api/polling/viewsinglepollApi';

export function* watchCreateLesson() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createSagaAsync);
  yield takeLatest(constants.DATA_POLLING_REQUEST, fetchPollingData);
  yield takeLatest(constants.SUBMIT_POLL_REQUEST, submitPollingData);
  yield takeLatest(constants.ADD_NEWUSER_REQUEST, signupAsync);
  yield takeLatest(constants.ADD_NEWPOLL_REQUEST, addNewPollingData);
  yield takeLatest(constants.ADD_NEWOPTION_REQUEST, addNewOption);
  yield takeLatest(constants.DELETE_POLL_REQUEST, deletePollData);
  yield takeLatest(constants.DELETE_POLLOPTION_REQUEST, deletePollOption);
  yield takeLatest(constants.UPDATE_POLLTITLE_REQUEST, editTitle);
  yield takeLatest(constants.VIEW_USERSLIST_REQUEST, userListAsync);
  yield takeLatest(constants.VIEW_SINGLEPOLL_REQUEST, singlePollData);
}
export default function* rootSaga() {
  yield [
    watchCreateLesson(),
  ];
}
