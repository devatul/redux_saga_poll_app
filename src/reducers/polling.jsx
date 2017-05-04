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
  submitPoll: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  addPoll: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  addPollOption: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  editTitle: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  deletePoll: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  deletePollOption: {
    data: [],
    isLoading: true,
    isError: false,
    isSucess: false,
    errors: [],
  },
  viewPoll: {
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
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const submitPollSuccess = (state, action) => update(state, {
  submitPoll: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const submitPollFailed = (state, action) => update(state, {
  submitPoll: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const addNewPollSuccess = (state, action) => update(state, {
  addPoll: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const addNewPollFailed = (state, action) => update(state, {
  addPoll: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});


const addNewOptionsSuccess = (state, action) => update(state, {
  addPollOption: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const addNewOptionsFailed = (state, action) => update(state, {
  addPollOption: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const updatePollTitleSuccess = (state, action) => update(state, {
  editTitle: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const updatePollTitleFailed = (state, action) => update(state, {
  editTitle: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const deletePollSuccess = (state, action) => update(state, {
  deletePoll: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const deletePollFailed = (state, action) => update(state, {
  deletePoll: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const deletePollOptionSuccess = (state, action) => update(state, {
  deletePollOption: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const deletePollOptionFailed = (state, action) => update(state, {
  deletePollOption: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

const viewSinglePollSuccess = (state, action) => update(state, {
  viewPoll: {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    errors: { $set: [] },
  },
});

const viewSinglePollFailed = (state, action) => update(state, {
  viewPoll: {
    data: { $set: [] },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    errors: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.DATA_POLLING_SUCCESS]: pollingFetchSuccess,
  [constants.DATA_POLLING_FAILED]: pollingFetchFailed,

  [constants.SUBMIT_POLL_SUCCESS]: submitPollSuccess,
  [constants.SUBMIT_POLL_FAILED]: submitPollFailed,

  [constants.ADD_NEWPOLL_SUCCESS]: addNewPollSuccess,
  [constants.ADD_NEWPOLL_FAILED]: addNewPollFailed,

  [constants.ADD_NEWOPTION_SUCCESS]: addNewOptionsSuccess,
  [constants.ADD_NEWOPTION_FAILED]: addNewOptionsFailed,

  [constants.UPDATE_POLLTITLE_SUCCESS]: updatePollTitleSuccess,
  [constants.UPDATE_POLLTITLE_FAILED]: updatePollTitleFailed,

  [constants.DELETE_POLL_SUCCESS]: deletePollSuccess,
  [constants.DELETE_POLL_FAILED]: deletePollFailed,

  [constants.DELETE_POLLOPTION_SUCCESS]: deletePollOptionSuccess,
  [constants.DELETE_POLLOPTION_FAILED]: deletePollOptionFailed,

  [constants.VIEW_SINGLEPOLL_SUCCESS]: viewSinglePollSuccess,
  [constants.VIEW_SINGLEPOLL_FAILED]: viewSinglePollFailed,
}, initialState);
