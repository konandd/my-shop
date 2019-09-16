import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../../redux/products/actions';
import Breadcrumb from '../Breadcrumb';
import './GoodsList.scss';
import 'antd/dist/antd.css';
import { arrSort } from '../../helper/help';
import {
  getCart, setItem, checkCartList, getCheck,
} from '../../redux/cart/actions';
import Price from '../Price';
import { showMessage } from '../../redux/message/actions';


class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'default',
    };
    this.initRedux();
  }

  initRedux = () => {
    const {
      actions: {
        getItems, getCart,
      },
    } = this.props;
    getCart();
    getItems();
  };

  render() {
    const {
      cart,
      actions: {
        setItem, showMessage,
      },
    } = this.props;
    const { items = [] } = this.props;
    const { sortType } = this.state;
    const key = this.props.match.params.name;
    return (
      <div className="content">
        <div className="item-top">
          <Breadcrumb history={this.props.history} name={key} />
          <select onChange={e => this.setState({ sortType: e.target.value })}>
            <option selected value="default">Популярні</option>
            <option value="max">Від дорогих до дешевих</option>
            <option value="min">Від дешевих до дорогих</option>
          </select>
        </div>
        <div className="item-list">
          { items.filter(item => item.category === key)
            .sort(arrSort[sortType])
            .map(p => (
              <div key={p.id} className={p.inStock === 'Немає в наявності' ? 'item item-none' : 'item'}>
                <img className="image" src={p.image} alt={p.name} />
                <div className="title-wrapper">
                  <Link to={`/${key}/${p.id}`}>{p.name}</Link>
                  <div className="rating">
                    <StarRatings
                      rating={parseInt(p.rating, 10)}
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="0px"
                      starRatedColor="#1890ff"
                    />
                    <div className="reviews">{p.reviews} відгуків</div>
                  </div>
                </div>
                <div className="description-wrapper">
                  <Price price={p.price} oldPrice={p.oldPrice} />
                  {p.inStock === 'Немає в наявності' ? '' : cart.find(item => item.id === p.id)
                    ? <button type="button" onClick={() => (this.props.history.push('/cart'))} className="cart-in" />
                    : <button type="button" onClick={() => { setItem(items[p.id], cart); showMessage({ text: 'Товар добавлен в корзину' }); }} className="cart" />
                        }
                </div>
                <div className="stock">{p.inStock}</div>
              </div>
            ))}
        </div>
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
        showMessage,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
