import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../Types';

const INITIAL_STATE = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

const signUpStart = (state, action) => {
  return { ...state, error: null, loading: true };
};

const signUpSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    user: action.user,
    error: null,
    loading: false,
  };
};

const signUpFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return signUpStart(state, action);

    case SIGNUP_SUCCESS:
      return signUpSuccess(state, action);

    case SIGNUP_FAIL:
      return signUpFail(state, action);
    default:
      return state;
  }
};
