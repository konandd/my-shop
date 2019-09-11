import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../../redux/products/actions';
import {
  setItem, removeItem, checkItem, getCart,
} from '../../redux/cart/actions';
import './SelectedProduct.scss';
import Breadcrumb from '../Breadcrumb';


class SelectedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initRedux();
  }

  initRedux = () => {
    const { actions: { getItems, getCart } } = this.props;
    getCart();
    getItems();
  };


  render() {
    const {
      cart,
      actions: {
        setItem,
      },
    } = this.props;
    const { items } = this.props;
    const { name } = this.props.match.params;
    const { id } = this.props.match.params;
    const currentProduct = items[id];
    console.log(this.props);
    return (
      <div>
        <Breadcrumb history={this.props.history} name={name} id={currentProduct.name} />
        <div className="content-wrapper">
          <img className="product-image" alt={currentProduct.name} src={currentProduct.image} />
          <div className="info-wrapper">
            <h1>{currentProduct.name}</h1>
            <h2>Опис</h2>
            <p>{currentProduct.description}</p>
            <hr />
            <div className="description">
              <span className="current-price">{currentProduct.price}₴</span>
              { currentProduct.inStock === 'Немає в наявності' ? <button type="button" className="cart-btn">Повідомте, коли з`явиться</button>
                : cart.find(item => item.id === currentProduct.id) ? (
                  <button type="button" onClick={() => (this.props.history.push('/cart'))} className="cart-in" />
                )
                  : <button type="button" onClick={() => setItem(items[id], cart)} className="cart" />
                }
            </div>
            <h4>Характеристики:</h4>
            <pre>{currentProduct.specifications}</pre>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.products.items,
    cart: state.shopCart.cart,
    inCart: state.shopCart.inCart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getItems,
        setItem,
        removeItem,
        checkItem,
        getCart,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
