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
  userLogin:
  { isLoading: { $set: true },
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
}, initialState);
