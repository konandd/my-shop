export const GET_CART = 'GET_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_ITEM = 'SET_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';
export const CHECK_CART_LIST = 'CHECK_CART_LIST';
export const SET_COUNT = 'SET_COUNT';
export const GET_CHECK = 'GET_CHECK';


export function setItem(item, cart) {
  const newItems = [];
  item.count = 1;
  // eslint-disable-next-line no-unused-expressions
  cart === null ? newItems.push(item)
    : cart.slice(0).map(p => (newItems.push(p))) && newItems.push(item);
  localStorage.setItem('cart', JSON.stringify(newItems));
  return (dispatch) => {
    dispatch({
      type: SET_ITEM,
      payload: newItems,
    });
  };
}

export function getCart() {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    dispatch({
      type: GET_CART,
      payload: cart === null ? [] : cart,
    });
  };
}

export function removeItem(item, cart) {
  const cartList = cart.map(p => (p.id === item.id));
  cart.splice(cartList.indexOf(true), 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: cart,
    });
  };
}

export function checkItem(item) {
  const cart = localStorage.getItem('cart');
  const flag = false;
  const a = JSON.parse(cart) === null ? flag : JSON.parse(cart).map(p => (p.name === item.name));
  return (dispatch) => {
    dispatch({
      type: CHECK_ITEM,
      payload: a.indexOf(true) !== -1,
    });
  };
}

export function checkCartList(item) {
  const cart = localStorage.getItem('cart');
  const flag = false;
  const a = JSON.parse(cart) === null ? flag
    : JSON.parse(cart).map(p => (item.map(i => i.name === p.name)));
  return (dispatch) => {
    dispatch({
      type: CHECK_CART_LIST,
      payload: a,
    });
  };
}

export function getCheck(checkCart) {
  return (dispatch) => {
    dispatch({
      type: GET_CHECK,
      payload: checkCart,
    });
  };
}

export function setCount(id, cart) {
  cart.filter(item => item.id === id).count++;
  localStorage.setItem('cart', JSON.stringify(cart));
  return (dispatch) => {
    dispatch({
      type: SET_COUNT,
      payload: cart,
    });
  };
}
