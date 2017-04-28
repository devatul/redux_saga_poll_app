import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
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
const userLoginSuccess = (state, action) => update(state, {
  userLogin: {
    data: { $set: action.payload.data },
    isLoading: { $set: true },
    isSuccess: { $set: true },
  },
});

const userLoginFailed = (state, action) => update(state, {
  userLogin: {
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});


export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_FAILED]: userLoginFailed,
}, initialState);
