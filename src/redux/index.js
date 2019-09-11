import { combineReducers } from 'redux';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';
import messageReducer from './message/reducers';

const reducers = {
  products: productsReducer,
  shopCart: cartReducer,
  message: messageReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
