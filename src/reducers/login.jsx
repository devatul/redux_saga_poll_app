import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';
import './immutaliby';

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


export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_FAILED]: userLoginFailed,
}, initialState);
