import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  checkCartList, getCart, getCheck, setItem,
} from '../../../redux/cart/actions';
import { getItems } from '../../../redux/products/actions';


class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="count">
        <input type="number" step="1" defaultValue="1" className="number" min="1" max="99" value={count} onChange={e => this.setState({ count: e.target.value })} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.products.items,
    checkCart: state.shopCart.checkCart,
    cart: state.shopCart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        checkCartList,
        getItems,
        setItem,
        getCart,
        getCheck,
      },
      dispatch,
    ),
  };
}

export default InputNumber;
