import { createAction } from 'redux-actions';
import * as constants from './constants';

// login
export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginFailed = createAction(constants.USER_LOGIN_FAILED);

// polling
export const dataPollingRequest = createAction(constants.DATA_POLLING_REQUEST);
export const dataPollingSuccess = createAction(constants.DATA_POLLING_SUCCESS);
export const dataPollingFailed = createAction(constants.DATA_POLLING_FAILED);

// submitPollApi
export const submitPollRequest = createAction(constants.SUBMIT_POLL_REQUEST);
export const submitPollSuccess = createAction(constants.SUBMIT_POLL_SUCCESS);
export const submitPollFailed = createAction(constants.SUBMIT_POLL_FAILED);

// signup new userName
export const addNewUserRequest = createAction(constants.ADD_NEWUSER_REQUEST);
export const addNewUserSuccess = createAction(constants.ADD_NEWUSER_SUCCESS);
export const addNewUserFailed = createAction(constants.ADD_NEWUSER_FAILED);

// add new poll
export const addNewPollRequest = createAction(constants.ADD_NEWPOLL_REQUEST);
export const addNewPollSuccess = createAction(constants.ADD_NEWPOLL_SUCCESS);
export const addNewPollFailed = createAction(constants.ADD_NEWPOLL_FAILED);

// add new options
export const addNewOptionRequest = createAction(constants.ADD_NEWOPTION_REQUEST);
export const addNewOptionSuccess = createAction(constants.ADD_NEWOPTION_SUCCESS);
export const addNewOptionFailed = createAction(constants.ADD_NEWOPTION_FAILED);

// update new title
export const addNewTitleRequest = createAction(constants.UPDATE_POLLTITLE_REQUEST);
export const addNewTitleSuccess = createAction(constants.UPDATE_POLLTITLE_SUCCESS);
export const addNewTitleFailed = createAction(constants.UPDATE_POLLTITLE_FAILED);

// delete poll options
export const deletePollOptionRequest = createAction(constants.DELETE_POLLOPTION_REQUEST);
export const deletePollOptionSuccess = createAction(constants.DELETE_POLLOPTION_SUCCESS);
export const deletePollOptionFailed = createAction(constants.DELETE_POLLOPTION_FAILED);

// delete poll
export const deletePollRequest = createAction(constants.DELETE_POLL_REQUEST);
export const deletePollSuccess = createAction(constants.DELETE_POLL_SUCCESS);
export const deletePollFailed = createAction(constants.DELETE_POLL_FAILED);

// view user list
export const viewUserListRequest = createAction(constants.VIEW_USERSLIST_REQUEST);
export const viewUserListSuccess = createAction(constants.VIEW_USERSLIST_SUCCESS);
export const viewUserListFailed = createAction(constants.VIEW_USERSLIST_FAILED);

// view single poll
export const viewSinglePollRequest = createAction(constants.VIEW_SINGLEPOLL_REQUEST);
export const viewSinglePollSuccess = createAction(constants.VIEW_SINGLEPOLL_SUCCESS);
export const viewSinglePollFailed = createAction(constants.VIEW_SINGLEPOLL_FAILED);
