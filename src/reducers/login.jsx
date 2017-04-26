import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  userLogin: {
    data: [],
    isLoading: false,
  },
};

const userLoginSuccess = (state, action) => update(state, {
  userLogin: { $setRequestSuccess: action.payload },
  props.history.push('dashboard/`${action.payload}`')
});

const userLoginError = (state, action) => update(state, {
  userLogin: { $setRequestError: action.payload },
});

const userLoginIdle = (state, action) => update(state, {
  userLogin: { $setRequestIdle: action.payload },
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_ERROR]: userLoginError,
}, initialState,...this.props);
