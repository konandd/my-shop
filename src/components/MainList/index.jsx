import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFirms } from '../../redux/products/actions';
import './MainList.scss';
import Breadcrumb from '../Breadcrumb';
import Slider from '../Slider';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initRedux();
  }

  initRedux = () => {
    const { actions: { getFirms } } = this.props;
    getFirms();
  };

  render() {
    const { firms } = this.props;
    console.log(firms.map(p => p.id));
    return (
      <div className="category-wrapper">
        <div className="category-slider"><Slider /></div>
        <div className="category-list">
          {firms.map(p => (
            <div key={p.id} className="category">
              <img className="image" src={p.categoryImg} alt={p.name} />
              <div className="category-name">
                <Link to={`/${p.name}`}>{p.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    firms: state.products.firms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getFirms,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainList);
