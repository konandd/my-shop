import React from 'react';
import './Price.scss';

const Price = ({ price, oldPrice }) => (
  <React.Fragment>
    { oldPrice
      ? (
        <div className="price-wrapper">
          <span className="price-old">{oldPrice}<span className="currency">₴</span></span>
          <span className="price price-discount">{price}<span className="currency">₴</span></span>
        </div>
      ) : (
        <div className="price-wrapper">
          <span className="price">{price}<span className="currency">₴</span></span>
        </div>
      )}
  </React.Fragment>
);
export default Price;
