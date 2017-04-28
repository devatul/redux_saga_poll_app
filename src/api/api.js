import axios from 'axios';

const baseURL = 'http://144.76.34.244:3333';

export const loginApi =
  action =>
  axios.get(`${baseURL}/login?username=${action.payload.userName}&password=${action.payload.passWord}`)
  .then(res => res.data);
