import axiosInstance from '../../api/index';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../Types/AuthTypes';
import { addFlashMessage } from './flashMessage';

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

      dispatch({
        type: AUTH_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
      history.push('/');
    })
    .catch((err) => {
      console.log('error', err.response.data);
      dispatch({
        type: AUTH_FAIL,
        error: err.response.data,
      });
    });
};
