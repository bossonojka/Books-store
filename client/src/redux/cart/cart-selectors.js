import { createSelector } from 'reselect';

const getCart = (state) => state.cart.cart;

const getCartItemId = (_state, props) => props.itemId;

const orderList = (state) => state.cart.orderList;

const cartItems = (state) => state.cart.cartItems;

export const findCartItem = createSelector([getCart, getCartItemId], (cart, itemId) => cart.includes(itemId));

export const totalCounter = createSelector([orderList, cartItems], (orderList, cartItems) => {
  if (!cartItems.length || cartItems.length !== orderList.length) return;
  let total = 0;
  for (let i = 0; i < orderList.length; i++) {
    total += cartItems[i].price * orderList[i].count;
  }
  return total;
});
