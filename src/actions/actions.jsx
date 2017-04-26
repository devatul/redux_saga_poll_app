import { createAction } from 'redux-actions';
import * as constants from './constants';

export const USER_LOGIN_REQUEST = createAction(constants.USER_LOGIN_REQUEST);
export const USER_LOGIN_SUCCESS = data => createAction(constants.USER_LOGIN_SUCCESS)(data);
export const USER_LOGIN_ERROR = createAction(constants.USER_LOGIN_ERROR);
