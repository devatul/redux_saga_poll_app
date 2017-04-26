import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  userLogin: {
    data: [],
    isLoading: false,
  },
  userLogout: {
    data: [],
    isLoading: false,
  },
};

const userLoginRequest = state => update(state, {
  userLogin: { $setRequestLoading: null },
});

const userLoginSuccess = (state, action) => update(state, {
  userLogin: { $setRequestSuccess: action.payload },
});

const userLoginError = (state, action) => update(state, {
  userLogin: { $setRequestError: action.payload },
});

const userLoginIdle = (state, action) => update(state, {
  userLogin: { $setRequestIdle: action.payload },
});

export default handleActions({
  [constants.VALIDATE_USER_LOGIN_REQUEST]: validateUserLoginRequest,
  [constants.VALIDATE_USER_LOGIN_SUCCESS]: validateUserLoginSuccess,
  [constants.VALIDATE_USER_LOGIN_ERROR]: validateUserLoginError,
  [constants.VALIDATE_USER_LOGIN_IDLE]: validateUserLoginIdle,
});
