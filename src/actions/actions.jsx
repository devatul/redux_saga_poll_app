import { createAction } from 'redux-actions';
import * as constants from './constants';

// export function login(username, password) {
//   return { type: constants.Login, username, password };
// }
export const login = createAction(constants.Login);
