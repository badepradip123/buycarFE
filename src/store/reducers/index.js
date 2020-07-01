import { combineReducers } from 'redux';
import SignUpReducer from './SignUpReducer';
import AuthReducer from './AuthReducer';
import FlashReducer from './FlashReducer';
import DetailsReducer from './ProductDetailsReducer';
import AddressReducer from './AddressReducer';
import ProductListReducer from './ProductListReducer';

export default combineReducers({
  signup: SignUpReducer,
  auth: AuthReducer,
  flash: FlashReducer,
  details: DetailsReducer,
  address: AddressReducer,
  products: ProductListReducer,
});
