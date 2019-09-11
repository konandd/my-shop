import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../../redux/products/actions';
import { removeItem, getCart, setCount } from '../../redux/cart/actions';
import './Cart.scss';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initRedux();
  }

    initRedux = () => {
      const { actions: { getItems, getCart } } = this.props;
      getItems();
      getCart();
    };

    render() {
      const {
        cart, items,
        actions: {
          removeItem, getCart, setCount,
        },
      } = this.props;
      const { count } = this.state;
      const a = cart === null ? 0 : cart.map(p => (+p.price));
      const totalPrice = a.reduce((partial_sum, a) => partial_sum + a, 0);
      return (
        <div className="cart-wrapper">
          <div className="cart-item-wrapper">{cart === null ? 'empty' : cart.map(p => (
            <div key={p.id + p.price} className="cart-item">
              <img className="img" alt={p.name} src={p.image} />
              <div>
                <Link to={`/${p.category}/${p.id}`}>{p.name}</Link>
                <p>Price: {p.price}</p>
              </div>
              <div className="count">
                <input type="number" step="1" defaultValue="1" className="number" min="1" max="99" id={p.id} value={p.count} onChange={() => { setCount(p.id, cart); getCart(); }} />
              </div>
              <div className="btn">
                <span>{}</span>
                <button
                  type="button"
                  onClick={() => {
                    removeItem(items[p.id], cart);
                    getCart();
                  }}
                >Remove
                </button>
              </div>
            </div>
          ))
                    }
          </div>
          <div>Total price: {totalPrice}</div>
        </div>
      );
    }
}
function mapStateToProps(state) {
  return {
    items: state.products.items,
    cart: state.shopCart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getItems,
        removeItem,
        getCart,
        setCount,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
