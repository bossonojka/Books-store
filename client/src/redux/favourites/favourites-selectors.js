import { createSelector } from 'reselect';

const getFavourites = (state) => state.favourites.favourites;

const getFavouriteId = (_state, props) => props.itemId;

const getBooks = (state) => state.books.books;

export const findFavouriteItem = createSelector([getFavourites, getFavouriteId], (favourites, itemId) =>
  favourites.includes(itemId)
);

export const getFavouriteItems = createSelector([getFavourites, getBooks], (favourites, books) =>
  books.filter((book) => favourites.includes(book.id))
);
