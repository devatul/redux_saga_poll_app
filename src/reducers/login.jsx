import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  userLogin: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
};
const userLoginSuccess = (state, action) => update(state, {
  userLogin: { $setRequestSuccess: action.payload },
});

const userLoginFailed = (state, action) => update(state, {
  userLogin: { $setRequestFailed: action.payload },
});

const userLogout = (state, action) => update(state, {
  userLogin: {
    data: { $set: '' },
    isLoading: { $set: false },
    isSuccess: { $set: false },
  },
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_FAILED]: userLoginFailed,
}, initialState);
