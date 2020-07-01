import {
  PD_SCHEDULE_ON,
  SHOW_SCHEDULE,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../Types';

const INITIAL_STATE = {
  date: '',
  time: '',
  showSchedule: false,
  error: null,
  loading: false,
  details: [],
};

const addSchedule = (state, action) => {
  return { ...state, date: action.date, time: action.time };
};

const showSchedule = (state, action) => {
  return { ...state, showSchedule: action.show };
};

/* ---------------------- FETCH PRODUCT DETAILS  ----------------------------- */
const fetchProductDetails = (state, action) => {
  return { ...state, error: null, loading: true };
};

const fetchProductDetailsSuccess = (state, action) => {
  // console.log('->>>>', action);
  return {
    ...state,
    details: action.details,
    error: null,
    loading: false,
  };
};

const fetchProductDetailsFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PD_SCHEDULE_ON:
      return addSchedule(state, action);

    case SHOW_SCHEDULE:
      return showSchedule(state, action);

    case FETCH_PRODUCT_DETAILS:
      return fetchProductDetails(state, action);

    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return fetchProductDetailsSuccess(state, action);

    case FETCH_PRODUCT_DETAILS_FAIL:
      return fetchProductDetailsFail(state, action);

    default:
      return state;
  }
};
