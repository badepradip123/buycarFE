import axiosInstance from '../../api/index';
import { SIGNUP_START, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../Types';

export const userSignUpRequest = (userData) => async (dispatch) => {
  dispatch({
    type: SIGNUP_START,
  });
  let body = {
    email: userData.email,
    first_name: userData.firstName,
    last_name: userData.lastName,
    mobile: userData.mobile,
    password: userData.password,
  };

  axiosInstance
    .post('/auth/signup', body)
    .then((res) => {
      // console.log('response-<>>>>>>><', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      dispatch({
        type: SIGNUP_SUCCESS,
        userData: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_FAIL,
        userData: err.response.data,
      });
    });
};
