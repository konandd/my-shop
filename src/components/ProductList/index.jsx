import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFirms } from '../../redux/products/actions';
import './ProductList.scss';

class ProductList extends Component {
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
      return (
        <div className="side-bar">
          {
                firms.map(p => (
                  <div key={p.id} className="list">
                    <Link to={`/${p.name}`}>{p.name}</Link>
                  </div>
                ))
            }
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
