export function login(username, password) {
  console.log(['username:', username, 'password:', password]);
  return { type: 'Login', username, password };
}
