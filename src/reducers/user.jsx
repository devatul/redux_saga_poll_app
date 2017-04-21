export default function user(state = [], action) {
  switch (action.type) {
    case 'Login':
      console.log(action);
      return state;
    default :
      return state;
  }
}

// export default user;
