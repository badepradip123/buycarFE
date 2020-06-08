import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  ADD_FLASH_MESSAGE,
} from '../Types';

const INITIAL_STATE = {
  token: null,
  user: {},
  error: null,
  loading: false,
  authRedirectPath: '/',
  flashMessage: '',
};

const authStart = (state, action) => {
  return { ...state, error: null, loading: true };
};

const authSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    token: action.token,
    user: action.user,
    error: null,
    loading: false,
  };
};

const authFail = (state, action) => {
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
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);

    case ADD_FLASH_MESSAGE:
      return addFlashMessage(state, action);

    default:
      return state;
  }
};
