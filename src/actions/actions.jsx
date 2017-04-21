
export function login(username, password) {
  return { type: 'Login', username, password };
}

export function signup(username, password) {
  return { type: 'Signup', username, password };
}
