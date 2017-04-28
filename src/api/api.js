import axios from 'axios';

axios.defaults.baseURL = 'http://144.76.34.244:3333/';

export const loginApi = action => `login?username=${action.payload.userName}&password=${action.payload.passWord}`;
