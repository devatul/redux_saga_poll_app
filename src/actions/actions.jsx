import { createAction } from 'redux-actions';
import * as constants from './constants';

//login
export const USER_LOGIN_REQUEST = createAction(constants.USER_LOGIN_REQUEST);
export const USER_LOGIN_SUCCESS = createAction(constants.USER_LOGIN_SUCCESS);
export const USER_LOGIN_FAILED = createAction(constants.USER_LOGIN_FAILED);

//polling
export const DATA_POLLING_REQUEST = createAction(constants.DATA_POLLING_REQUEST);
export const DATA_POLLING_SUCCESS = createAction(constants.DATA_POLLING_SUCCESS);
export const DATA_POLLING_FAILED = createAction(constants.DATA_POLLING_FAILED);
