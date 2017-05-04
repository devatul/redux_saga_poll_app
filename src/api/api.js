import axios from 'axios';

axios.defaults.baseURL = 'http://144.76.34.244:3333/';

// login api path
export const loginApi = action => `login?username=${action.payload.userName}&password=${action.payload.passWord}`;
// polling list path
export const viewPollAPI = 'list_polls';
// submitting vote path
export const submitPollApi = action => `do_vote?id=${action.payload.selectedData.selected_id}&option_text=${action.payload.selectedData.selected_title}`;
// add user path
export const addUserApi = action => `add_user?username=${action.payload.username}&password=${action.payload.password}&role=${action.payload.role}`;
// add new poll path
export const addPollApi = action => `add_poll?title${action.payload.title}&options=${action.payload.options}`;
// add poll new option path
export const addPollOptionApi = action => `add_new_option?id=${action.payload.id}&option_text=${action.payload.newOption}`;
// update poll title path
export const editPollTitleApi = action => `update_poll_title?id${action.payload.id}&title=${action.payload.newtitle}`;
// delete poll option path
export const deletePollOptionApi = action => `delete_poll_option?id=${action.payload.id}&option_text=${action.payload.option}`;
// delete poll path
export const deletePollApi = action => `delete_poll?id=${action.payload.id}`;
// view user list path
export const listUserapi = 'list_users';
// view single poll path
export const listSinglePollapi = 'list_poll';
