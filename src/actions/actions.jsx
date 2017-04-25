import * as constants from '../constants';

export function login(username, password) {
  return { type: constants.Login, username, password };
}
