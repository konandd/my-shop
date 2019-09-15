import React, { Component } from 'react';
import {
  Switch, Route, Link, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFirms, getItems } from '../redux/products/actions';
import { getCart } from '../redux/cart/actions';
import ProductList from '../components/ProductList';
import './App.scss';
import GoodsList from '../components/GoodsList';
import MainList from '../components/MainList';
import SelectedProduct from '../components/SelectedProduct';
import Cart from '../components/Cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.initRedux();
  }


  initRedux = () => {
    const { actions: { getFirms, getItems, getCart } } = this.props;
    getFirms();
    getItems();
    getCart();
  };

  render() {
    const {
      cart,
    } = this.props;
    return (
      <div>
        <div className="bar">
          <div className="logo"><Link to="/">Shop</Link></div>
          <ul className="drop-menu">
            <li>
              <button type="button" onClick={() => (this.props.history.push('/cart'))} className="cart-link" />
              <span className="quantity">{cart === null ? '' : cart.length}</span>
              <ul className="drop">{ cart === null ? '' : cart.map(p => (
                <li>{p.name}</li>))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="main">
          <ProductList />
          <div className="main-content">
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route exact path="/" component={MainList} />
              <Switch>
                <Route path="/:name/:id" component={SelectedProduct} />
                <Route path="/:name" component={GoodsList} />
              </Switch>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firms: state.products.firms,
    items: state.products.items,
    cart: state.shopCart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getFirms,
        getItems,
        getCart,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
