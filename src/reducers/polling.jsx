import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../actions/constants';

export const initialState = {
  polling: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
};
const pollingFetchSuccess = (state, action) => update(state, {
  polling: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});
const pollingFetchFailed = (state, action) => update(state, {
  polling: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    errors: { $set: action.payload.data },
    isError: { $set: true },
  },
});


export default handleActions({
  [constants.DATA_POLLING_SUCCESS]: pollingFetchSuccess,
  [constants.DATA_POLLING_FAILED]: pollingFetchFailed,
}, initialState);
