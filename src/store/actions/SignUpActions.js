import axiosInstance from '../../api/index';
import { SIGNUP_START, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../Types';

export const userSignUpRequest = (userData, history) => async (dispatch) => {
  dispatch({
    type: SIGNUP_START,
  });
  let body = {
    email: userData.email,
    first_name: userData.firstName,
    last_name: userData.lastName,
    mobile: userData.mobile ? '+91' + userData.mobile : '',
    password: userData.password,
  };

  axiosInstance
    .post('/auth/signup', body)
    .then((res) => {
      console.log('response-<>>>>>>><', res.data);
      dispatch({
        type: SIGNUP_SUCCESS,
        userData: res.data,
      });
      history.push('/login');
    })
    .catch((err) => {
      console.log('error-<>>>>>>><', err.response);
      dispatch({
        type: SIGNUP_FAIL,
        error: err.response.data,
      });
    });
};
