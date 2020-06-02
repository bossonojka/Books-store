import { SET_AUTH_STATUS } from './auth-action-types';

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
