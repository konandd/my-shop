import { firms, items } from '../../components/products';

export const GET_FIRMS = 'GET_FIRMS';
export const GET_ITEMS = 'GET_ITEMS';

export function getFirms() {
  return (dispatch) => {
    dispatch({
      type: GET_FIRMS,
      payload: firms,
    });
  };
}

export function getItems() {
  return (dispatch) => {
    dispatch({
      type: GET_ITEMS,
      payload: items,
    });
  };
}
