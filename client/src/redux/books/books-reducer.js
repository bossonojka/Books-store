import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_START,
  SET_SEARCH_TEMPLATE,
  FETCH_SEARCH_BOOKS_SUCCESS,
  GET_BOOK_BY_ID,
  FETCH_CATEGORIES_SUCCESS,
  SET_CHECKED_CATEGORY,
} from './books-action-types';

const initialState = {
  books: [],
  searchTotalCount: null,
  page: 0,
  isLoading: false,
  error: '',
  searchTemplate: '',
  currentBook: {},
  categories: {},
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: [...state.books, ...action.data],
        searchTotalCount: action.totalCount,
        page: state.page + 1,
        isLoading: false,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        error: action.err,
        isLoading: false,
      };
    case FETCH_BOOKS_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_SEARCH_TEMPLATE:
      return {
        ...state,
        searchTemplate: action.template,
        page: 0,
      };
    case FETCH_SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
        searchTotalCount: action.count,
        page: 1,
        isLoading: false,
      };
    case GET_BOOK_BY_ID:
      return {
        ...state,
        currentBook: action.currentBook,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_CHECKED_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, [action.category.name]: action.category.checked },
        books: [],
        page: 0,
      };

    default:
      return state;
  }
};

export { booksReducer };
