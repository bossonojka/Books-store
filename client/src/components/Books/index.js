import { connect } from 'react-redux';
import { Books } from './Books';
import { getFavouritesByIds } from '../../redux/favourites/favourites-actions';

import { requestBooks, requestSearch, setSearchTemplate } from '../../redux/books/books-actions';

const mapStateToProps = (state) => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  favourites: state.favourites.favourites,
  favouritesBooks: state.favourites.favouritesBooks,
  template: state.books.searchTemplate,
  pagesCount: state.books.searchTotalCount,
});

const mapDispatchToProps = {
  getFavouritesByIds,
  requestBooks,
  setSearchTemplate,
  requestSearch,
};

export const BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books);
