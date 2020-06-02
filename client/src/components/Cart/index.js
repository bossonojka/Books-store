import { connect } from 'react-redux';
import { Cart } from './Cart';
import { getCartItemsByIds, deleteCartItem, countIncrement, countDecrement } from '../../redux/cart/cart-actions';
import { totalCounter } from '../../redux/cart/cart-selectors';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  cartItems: state.cart.cartItems,
  total: totalCounter(state),
  orderList: state.cart.orderList,
});

const mapDispatchToProps = {
  getCartItemsByIds,
  deleteCartItem,
  countIncrement,
  countDecrement,
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export { CartContainer };
