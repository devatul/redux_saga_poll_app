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
  signUp: {
    data: [],
    isLoading: false,
    isError: false,
    isSucess: false,
    errors: [],
  },
  userList: {
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
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const userLoginFailed = (state, action) => update(state, {
  userLogin: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});

const signupUserSuccess = (state, action) => update(state, {
  signUp: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const signupUserFailed = (state, action) => update(state, {
  signUp: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});

const viewUserListSuccess = (state, action) => update(state, {
  signUp: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const viewUserListFailed = (state, action) => update(state, {
  signUp: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_FAILED]: userLoginFailed,

  [constants.ADD_NEWUSER_SUCCESS]: signupUserSuccess,
  [constants.ADD_NEWUSER_FAILED]: signupUserFailed,

  [constants.VIEW_USERSLIST_SUCCESS]: viewUserListSuccess,
  [constants.VIEW_USERSLIST_FAILED]: viewUserListFailed,
}, initialState);
