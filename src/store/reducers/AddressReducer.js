import {
  ADD_USER_ADDRESS,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
  ADD_FLASH_MESSAGE,
} from '../Types';

const INITIAL_STATE = {
  address: {},
  error: null,
  loading: false,
};

const addAddress = (state, action) => {
  return { ...state, error: null, loading: true };
};

const addAddressSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    address: action.address,
    error: null,
    loading: false,
  };
};

const addAddressFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

const addFlashMessage = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    flashMessage: action.message,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS:
      return addAddress(state, action);
    case ADD_USER_ADDRESS_SUCCESS:
      return addAddressSuccess(state, action);
    case ADD_USER_ADDRESS_FAIL:
      return addAddressFail(state, action);

    case ADD_FLASH_MESSAGE:
      return addFlashMessage(state, action);

    default:
      return state;
  }
};
