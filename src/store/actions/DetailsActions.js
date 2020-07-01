import {
  PD_SCHEDULE_ON,
  SHOW_SCHEDULE,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../Types';
import axiosInstance from '../../api/index';
export function onSchedule(show) {
  return {
    type: SHOW_SCHEDULE,
    show: show,
  };
}

export function scheduleDate(date, time) {
  return {
    type: PD_SCHEDULE_ON,
    date: date,
    time: time,
  };
}

/* ---------------------- FETCH PRODCUT DETAILS ACTION ----------------------------- */
export const fetchProductDetailsRequest = (id, history) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT_DETAILS,
  });

  axiosInstance
    .get(`/product/${id}`)
    .then((res) => {
      console.log('response---', res.data);

      dispatch(fecthProductDetailsSuccess(res.data));
    })
    .catch((err) => {
      console.log('error', err.response);

      dispatch(fetchProductDetailsFail(err.response.data));
    });
};

export const fecthProductDetailsSuccess = (details) => {
  return {
    type: FETCH_PRODUCT_DETAILS_SUCCESS,
    details: details,
  };
};

export const fetchProductDetailsFail = (error) => {
  return {
    type: FETCH_PRODUCT_DETAILS_FAIL,
    error: error,
  };
};
