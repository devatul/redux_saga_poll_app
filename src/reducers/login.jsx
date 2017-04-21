import { browserHistory } from 'react-router';

import Immutable from 'immutable';

const initialState = {
  loginStatus: false,
  data: '',
};
export default function login(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {

    case 'Login_Success':
      console.log('hiiiiiiiiiiiiiii', action.response);
      return state.set('loginStatus', true);

    case 'Login_Error':
      console.log(action);

      return state;

    default :
      return state;
  }
}

// export default user;
