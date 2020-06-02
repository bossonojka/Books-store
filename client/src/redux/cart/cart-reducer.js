import {
  TOGGLE_CART,
  GET_CART_ITEMS_BY_IDS,
  DELETE_CART_ITEM,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
  CHECKOUT,
} from './cart-action-types';
import { filterById, filterByItemId } from '../../helpers/filters';

const initialState = {
  cart: [],
  cartItems: [],
  orderList: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cart: state.cart.includes(action.id) ? filterById(state.cart, action.id) : [...state.cart, action.id],
        orderList: state.cart.includes(action.id)
          ? filterByItemId(state.orderList, action.id)
          : [...state.orderList, { id: action.id, count: 1 }],
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: filterById(state.cart, action.id),
        cartItems: filterByItemId(state.cartItems, action.id),
        orderList: filterByItemId(state.orderList, action.id),
      };
    case GET_CART_ITEMS_BY_IDS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case COUNT_INCREMENT:
      return {
        ...state,
        orderList: state.orderList.map((item) =>
          item.id === action.id ? { ...item, count: (item.count += 1) } : item
        ),
      };
    case COUNT_DECREMENT:
      return {
        ...state,
        orderList: state.orderList.map((item) =>
          item.id === action.id ? { ...item, count: (item.count -= 1) } : item
        ),
      };
    case CHECKOUT:
      return {
        ...state,
        cart: [],
        cartItems: [],
        orderList: [],
      };
    default:
      return state;
  }
};
