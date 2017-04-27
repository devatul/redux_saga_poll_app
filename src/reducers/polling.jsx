import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  polling: {
    data: [],
    isLoading: false,
    isError: false,
    isSucess: false,
    errors: [],
  },
};
const pollingFetchSuccess = (state, action) => update(state, {
  userLogin:  {
    data: { $set: action.payload.data },
    isLoading: { $set: true },
    isSuccess: { $set: true },
  },
});

const pollingFetchFailed = (state, action) => update(state, {
  userLogin:  {
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});


export default handleActions({
  [constants.DATA_POLLING_SUCCESS]: pollingFetchSuccess,
  [constants.DATA_POLLING_FAILED]: pollingFetchFailed,
}, initialState);
