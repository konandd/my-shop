import { GET_FIRMS, GET_ITEMS } from './actions';

const initialState = {
  firms: '',
  items: '',
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FIRMS:
      return { ...state, firms: action.payload };

    case GET_ITEMS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export default productsReducer;
