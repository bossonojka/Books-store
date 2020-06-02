import {
  TOGGLE_CART,
  GET_CART_ITEMS_BY_IDS,
  DELETE_CART_ITEM,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
  CHECKOUT,
} from './cart-action-types';
import { HttpService } from '../../services/HttpService';
import { getParamsFromArray } from '../../helpers/paramsBuilders';

export const toggleCart = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_CART, id });
};

export const deleteCartItem = (id) => (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM, id });
};

export const countIncrement = (id) => (dispatch) => {
  dispatch({ type: COUNT_INCREMENT, id });
};

export const countDecrement = (id) => (dispatch) => {
  dispatch({ type: COUNT_DECREMENT, id });
};

export const checkout = (order) => (dispatch) => {
  return HttpService.post(`/orders`, order).then(() => {
    return dispatch({ type: CHECKOUT });
  });
};

export const getCartItemsByIds = (ids) => (dispatch) => {
  return HttpService.get(`/books/ids/?${getParamsFromArray(ids)}`).then(({ data }) => {
    return dispatch({ type: GET_CART_ITEMS_BY_IDS, cartItems: data });
  });
};
