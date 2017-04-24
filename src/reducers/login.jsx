import Immutable from 'immutable';

const initialState = {
  loginStatus: true,
  data: '',
};
export default function login(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {

    case 'Login_Success':
      return state.set('data', action.response.data);

    case 'Login_Error':
      return state.set('data', action.response.error);

    default :
      return state;
  }
}
