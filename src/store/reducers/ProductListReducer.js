import {
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAIL,
} from '../Types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  list: [],
};

/* ---------------------- FETCH PRODUCT LIST  ----------------------------- */
const fetchProductList = (state, action) => {
  return { ...state, error: null, loading: true };
};

const fetchProductListSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    list: action.list,
    error: null,
    loading: false,
  };
};

const fetchProductListFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return fetchProductList(state, action);
    case FETCH_PRODUCT_LIST_SUCCESS:
      return fetchProductListSuccess(state, action);
    case FETCH_PRODUCT_LIST_FAIL:
      return fetchProductListFail(state, action);

    default:
      return state;
  }
};
