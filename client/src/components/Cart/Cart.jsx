import React, { useState, useEffect } from 'react';
import { CartItem } from './CartItem';
import { Link, Route, useHistory } from 'react-router-dom';
import { CheckoutFormContainer } from './CheckoutForm';
import PropTypes from 'prop-types';
import { bookType, orderListType } from '../../helpers/propTypes';

import './Cart.scss';

export const Cart = ({
  cart,
  getCartItemsByIds,
  total,
  deleteCartItem,
  cartItems,
  countIncrement,
  countDecrement,
  orderList,
}) => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (cart.length) {
      setIsCartEmpty(false);
      getCartItemsByIds(cart);
      return;
    }

    setIsCartEmpty(true);
  }, [cart.length, getCartItemsByIds, cart]);

  const closeCheckoutForm = (e) => {
    e.target === e.currentTarget && goBack();
  };

  const { goBack } = useHistory();

  return (
    <>
      {isCartEmpty ? (
        <>
          <div className="isEmptyCart">Cart is empty</div>
          <Link to="/books">
            <button className="toBooks">Go to books</button>
          </Link>
        </>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((cartItem) => {
              return (
                <CartItem
                  cartItem={cartItem}
                  key={cartItem.id}
                  deleteCartItem={deleteCartItem}
                  countIncrement={countIncrement}
                  countDecrement={countDecrement}
                  orderList={orderList}
                />
              );
            })}
          </div>
          <div className="bottom-container">
            <div className="cart-bottom">
              <div className="price-total">{`Total: ${total ? total : ''} $`}</div>
              <Link to="/cart/checkout">
                <button className="open-checkout">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
      <Route exact path="/cart/checkout">
        <CheckoutFormContainer orderList={orderList} onClick={closeCheckoutForm} />
      </Route>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.number),
  getCartItemsByIds: PropTypes.func.isRequired,
  total: PropTypes.number,
  deleteCartItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  countIncrement: PropTypes.func.isRequired,
  countDecrement: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.shape(orderListType)).isRequired,
};

Cart.defaultProps = {
  total: 0,
};
