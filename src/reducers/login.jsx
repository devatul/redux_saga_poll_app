
import { handleActions } from 'redux-actions';
// import update from 'immutability-helper';

import * as constants from '../actions/constants';

export const initialState = {
  userLogin: {
    data: [],
    isLoading: false,
    isError: false,
    isSucess: false,
    errors: [],
  },
};
const userLoginSuccess = () => {
  console.log('hi');
};


export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: (action, state) => {
    console.log('handleActions');
    userLoginSuccess();
  },
  AB: (state, action) => {
    console.log('handleActions');
    return userLoginSuccess();
  },
}, initialState);
