import Immutable from 'immutable';
import * as constants from '../actions/constants';

const initialState = {
  loginStatus: true,
  data: '',
};
export default function login(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {

    case constants.LOGIN_REQUEST:
      return state.set('data', action.response.data);

    case constants.LOGIN_ERROR:
      return state.set('loginStatus', false);

    default :
      return state;
  }
}
