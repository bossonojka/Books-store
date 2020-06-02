import { TOGGLE_FAVOURITES, GET_FAVOURITES_BY_IDS } from './favourites-action-types';

const initialState = {
  favourites: [],
  favouritesBooks: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.includes(action.payload.id)
          ? state.favourites.filter((id) => action.payload.id !== id)
          : [...state.favourites, action.payload.id],
        favouritesBooks: state.favouritesBooks.find((item) => item.id === action.payload.id)
          ? state.favouritesBooks.filter((item) => action.payload.id !== item.id)
          : [...state.favouritesBooks],
      };
    case GET_FAVOURITES_BY_IDS:
      return {
        ...state,
        favouritesBooks: action.payload.favouritesBooks,
      };
    default:
      return state;
  }
};
