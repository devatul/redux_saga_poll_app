import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  userLogin: {
    data: [],
    isLoading:true,
  },
};
const userLoginSuccess = ( action) => console.log(action);

const userLoginError = (state, action) => update(state, {
  userLogin: {data:{ $set: action.payload }},
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_ERROR]: userLoginError,
}, initialState);
