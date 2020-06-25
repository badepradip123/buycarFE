import {
  ADD_USER_ADDRESS,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
  ADD_FLASH_MESSAGE,
  FETCH_USER_ADDRESS,
  FETCH_USER_ADDRESS_SUCCESS,
  FETCH_USER_ADDRESS_FAIL,
  DELETE_USER_ADDRESS,
  DELETE_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_FAIL,
} from '../Types';

const INITIAL_STATE = {
  address: {},
  error: null,
  loading: false,
  userAddress: [],
  delSuccess: false,
};

/* ---------------------- FETCH ADDRESS  ----------------------------- */
const fetchAddress = (state, action) => {
  return { ...state, error: null, loading: true, delSuccess: false };
};

const fetchAddressSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    userAddress: action.userAddress,
    error: null,
    loading: false,
  };
};

const fetchAddressFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

/* ---------------------- ADD ADDRESS  ----------------------------- */
const addAddress = (state, action) => {
  return { ...state, error: null, delSuccess: false };
};

const addAddressSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    address: action.address,
    userAddress: [...state.userAddress, action.userAddress],
    error: null,
  };
};

const addAddressFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

/* ---------------------- DELETE ADDRESS  ----------------------------- */
const deleteAddress = (state, action) => {
  return { ...state, error: null, loading: true, delSuccess: false };
};

const deleteAddressSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    delSuccess: true,
    error: null,
    loading: false,
  };
};

const deleteAddressFail = (state, action) => {
  return { ...state, error: action.error, loading: false, delSuccess: false };
};

const addFlashMessage = (state, action) => {
  return {
    ...state,
    error: null,
    flashMessage: action.message,
    delSuccess: false,
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

    case FETCH_USER_ADDRESS:
      return fetchAddress(state, action);
    case FETCH_USER_ADDRESS_SUCCESS:
      return fetchAddressSuccess(state, action);
    case FETCH_USER_ADDRESS_FAIL:
      return fetchAddressFail(state, action);

    case DELETE_USER_ADDRESS:
      return deleteAddress(state, action);
    case DELETE_USER_ADDRESS_SUCCESS:
      return deleteAddressSuccess(state, action);
    case DELETE_USER_ADDRESS_FAIL:
      return deleteAddressFail(state, action);

    case ADD_FLASH_MESSAGE:
      return addFlashMessage(state, action);

    default:
      return state;
  }
};
