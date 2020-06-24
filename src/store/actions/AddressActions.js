import { ADD_USER_ADDRESS } from '../Types';
import { addFlashMessage } from './flashMessage';
import axiosInstance from '../../api/index';
import {
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
} from '../Types/AddressTypes';

export const addAddressRequest = (address, history) => async (dispatch) => {
  let user = JSON.parse(localStorage.getItem('user'));

  dispatch({
    type: ADD_USER_ADDRESS,
  });
  let body = {
    street: address.street,
    apartment: address.apartment,
    city: address.city === 'Choose...' ? '' : address.city,
    state: address.state,
    pincode: address.pincode,
    country: '',
    user: user.id,
  };

  axiosInstance
    .post('/auth/address/', body)
    .then((res) => {
      dispatch(
        addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!',
        })
      );
      console.log('response---', res.data);
      dispatch(addAddreessSuccess(res.data));
    })
    .catch((err) => {
      console.log('error', err.response);
      dispatch(addAddreessFail(err.response.data));
    });
};

export const addAddreessSuccess = (token, address) => {
  return {
    type: ADD_USER_ADDRESS_SUCCESS,
    address: address,
  };
};

export const addAddreessFail = (error) => {
  return {
    type: ADD_USER_ADDRESS_FAIL,
    error: error,
  };
};
