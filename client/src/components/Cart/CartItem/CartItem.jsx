import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bookType, orderListType } from '../../../helpers/propTypes';

import './CartItem.scss';

export const CartItem = ({ cartItem, deleteCartItem, countIncrement, countDecrement, orderList }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    orderList.find((item) => (item.id === cartItem.id ? setCount(item.count) : false));
  }, [cartItem.id, orderList]);

  const changeCountPlus = () => {
    countIncrement(cartItem.id);
    setCount(count + 1);
  };

  const changeCountMinus = () => {
    if (count !== 1) {
      countDecrement(cartItem.id);
      setCount(count - 1);
    }
  };

  return (
    <div className="cart-item">
      <img className="cart-img" src={cartItem.img} alt="" />
      <div className="cart-info">
        <h3 className="cart-title">{cartItem.title}</h3>
        <p className="cart-text">{cartItem.description}</p>
      </div>
      <div className="cart-actions">
        <div className="price">{`${cartItem.price} $`}</div>
        <div className="count-controller">
          <button className="cart-btn" onClick={changeCountMinus}>
            -
          </button>
          <div className="cart-value">{count}</div>
          <button className="cart-btn" onClick={changeCountPlus}>
            +
          </button>
        </div>
        <button
          className="remove-cart"
          onClick={() => {
            deleteCartItem(cartItem.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape(bookType),
  deleteCartItem: PropTypes.func.isRequired,
  countIncrement: PropTypes.func.isRequired,
  countDecrement: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.shape(orderListType)).isRequired,
};
