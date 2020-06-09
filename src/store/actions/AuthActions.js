import axiosInstance from '../../api/index';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from '../Types/AuthTypes';
import { addFlashMessage } from './flashMessage';

export const authSuccess = (token, user) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: AUTH_LOGOUT,
  };
};

export const userLoginRequest = (userData, history) => async (dispatch) => {
  dispatch({
    type: AUTH_START,
  });
  let body = {
    username: userData.username,
    password: userData.password,
  };

  axiosInstance
    .post('/auth/login', body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      dispatch(
        addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!',
        })
      );

      dispatch(authSuccess(res.data.token, res.data.user));
      history.push('/');
    })
    .catch((err) => {
      // console.log('error', err.response.data);
      dispatch(authFail(err.response.data));
    });
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const user = localStorage.getItem('user');
      dispatch(authSuccess(token, user));
    }
  };
};
