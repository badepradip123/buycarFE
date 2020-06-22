import { combineReducers } from 'redux';
import SignUpReducer from './SignUpReducer';
import AuthReducer from './AuthReducer';
import FlashReducer from './FlashReducer';
import DetailsReducer from './DetailsReducer';

export default combineReducers({
  signup: SignUpReducer,
  auth: AuthReducer,
  flash: FlashReducer,
  details: DetailsReducer,
});
