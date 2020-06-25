import { addFlashMessage } from './flashMessage';
import axiosInstance from '../../api/index';
import {
  ADD_USER_ADDRESS,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
  FETCH_USER_ADDRESS,
  FETCH_USER_ADDRESS_SUCCESS,
  FETCH_USER_ADDRESS_FAIL,
  DELETE_USER_ADDRESS,
  DELETE_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_FAIL,
} from '../Types';

/* ---------------------- DELETE ADDRESS ACTION ----------------------------- */
export const deleteAddressRequest = (address_id) => async (dispatch) => {
  dispatch({
    type: DELETE_USER_ADDRESS,
  });

  axiosInstance
    .delete(`/auth/address/${address_id}/`)
    .then((res) => {
      // console.log('delete response---', res.data);

      dispatch(deleteAddreessSuccess());
    })
    .catch((err) => {
      // console.log('delete error', err.response);

      dispatch(deleteAddreessFail(err.response.data));
    });
};

export const deleteAddreessSuccess = () => {
  return {
    type: DELETE_USER_ADDRESS_SUCCESS,
  };
};

export const deleteAddreessFail = (error) => {
  return {
    type: DELETE_USER_ADDRESS_FAIL,
    error: error,
  };
};

/* ---------------------- FETCH ADDRESS ACTION ----------------------------- */
export const fetchAddressRequest = (history) => async (dispatch) => {
  dispatch({
    type: FETCH_USER_ADDRESS,
  });

  axiosInstance
    .get('/auth/address/')
    .then((res) => {
      console.log('response---', res.data);

      dispatch(fecthAddreessSuccess(res.data));
    })
    .catch((err) => {
      console.log('error', err.response);

      dispatch(fetchAddreessFail(err.response.data));
    });
};

export const fecthAddreessSuccess = (userAddress) => {
  return {
    type: FETCH_USER_ADDRESS_SUCCESS,
    userAddress: userAddress,
  };
};

export const fetchAddreessFail = (error) => {
  return {
    type: FETCH_USER_ADDRESS_FAIL,
    error: error,
  };
};

/* ---------------------- ADD ADDRESS ACTION ----------------------------- */
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
      history.go();
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
