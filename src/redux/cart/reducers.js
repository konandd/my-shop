import {
  GET_CART, REMOVE_ITEM, SET_ITEM, CHECK_ITEM, CHECK_CART_LIST, GET_CHECK, SET_COUNT,
} from './actions';

const initialState = {
  cart: [],
  inCart: null,
  checkCart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return { ...state, cart: action.payload };

    case REMOVE_ITEM:
      return { ...state, cart: action.payload };

    case SET_ITEM:
      return { ...state, cart: action.payload };

    case CHECK_ITEM:
      return { ...state, inCart: action.payload };

    case CHECK_CART_LIST:
      return { ...state, checkCart: action.payload };

    case GET_CHECK:
      return { ...state, checkCart: action.payload };

    case SET_COUNT:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
}

export default cartReducer;
