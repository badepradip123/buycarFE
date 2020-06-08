import axios from 'axios';
//import { Route, Switch } from 'react-router-dom';
//import AccountContainer from '../components/Account/AccountContainer';
import { withRouter } from 'react-router-dom';

// const api = 'https://buycar-api.herokuapp.com';
const api = process.env.REACT_APP_BASE_API_URL;
const axiosInstance = axios.create({
  baseURL: api,
});

axiosInstance.interceptors.request.use((request) => {
  let token = localStorage.getItem('token');
  if (token) {
    token = token ? token : '';
    request.headers['Authorization'] = 'Token ' + token;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/sign-in';
    }
    return Promise.reject({ ...error });
  }
);

export default withRouter(axiosInstance);
