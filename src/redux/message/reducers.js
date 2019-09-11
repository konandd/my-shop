import { CLEAN_MESSAGE, SHOW_MESSAGE } from './actions';

const initialState = {
  type: '',
  text: 'Initial message state',
  visible: false,
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, ...action.payload, visible: true };
    case CLEAN_MESSAGE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export default messageReducer;
