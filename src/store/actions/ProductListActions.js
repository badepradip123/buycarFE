import axiosInstance from '../../api/index';
import {
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_FAIL,
  FETCH_PRODUCT_LIST_SUCCESS,
} from '../Types';

/* ---------------------- FETCH PRODCUT LIST ACTION ----------------------------- */
export const fetchProductListRequest = (history) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT_LIST,
  });

  axiosInstance
    .get('/product/')
    .then((res) => {
      console.log('response---', res.data);

      dispatch(fecthProdcutListSuccess(res.data));
    })
    .catch((err) => {
      console.log('error', err.response);

      dispatch(fetchProductListFail(err.response.data));
    });
};

export const fecthProdcutListSuccess = (list) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    list: list,
  };
};

export const fetchProductListFail = (error) => {
  return {
    type: FETCH_PRODUCT_LIST_FAIL,
    error: error,
  };
};
