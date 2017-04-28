import { createAction } from 'redux-actions';
import * as constants from './constants';

//login
export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginFailed = createAction(constants.USER_LOGIN_FAILED);

//polling
export const dataPollingRequest = createAction(constants.DATA_POLLING_REQUEST);
export const dataPollingSuccess = createAction(constants.DATA_POLLING_SUCCESS);
export const dataPollingFailed = createAction(constants.DATA_POLLING_FAILED);
