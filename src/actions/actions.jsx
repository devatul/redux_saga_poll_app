
export function login(username, password) {
  console.log(username, password);
  return { type: 'Login', username, password };
}

export function signup(username, password) {
  console.log(['username:', username, 'password:', password]);
  return { type: 'Signup', username, password };
}
