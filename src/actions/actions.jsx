import { createAction } from 'redux-actions';
import * as constants from './constants';

export const login = createAction(constants.USER_LOGIN_REQUEST);
