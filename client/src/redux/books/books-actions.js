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
import { HttpService } from '../../services/HttpService';
import { parseQuery, parseState } from '../../helpers/settings';

export const setSearchTemplate = (template) => ({ type: SET_SEARCH_TEMPLATE, template });

export const setCheckedCategory = (category) => ({ type: SET_CHECKED_CATEGORY, category });

const fetchBooksSuccess = (data, totalCount) => ({ type: FETCH_BOOKS_SUCCESS, data, totalCount });

const fetchBooksFailure = (err) => ({ type: FETCH_BOOKS_FAILURE, err });

const fetchBooksStart = () => ({ type: FETCH_BOOKS_START });

const fetchSearchSuccess = (books, count) => ({ type: FETCH_SEARCH_BOOKS_SUCCESS, books, count });

export const requestBooks = () => (dispatch, getState) => {
  const queryParams = parseState(getState().books);
  const url = parseQuery(queryParams);

  dispatch(fetchBooksStart());
  return HttpService.get(url)
    .then(({ data, params }) => dispatch(fetchBooksSuccess(data, params)))
    .catch((err) => dispatch(fetchBooksFailure(err)));
};

export const requestCategories = () => (dispatch) => {
  HttpService.get('/categories').then(({ data }) => {
    const categories = data.reduce((acc, curr) => {
      acc[curr] = false;
      return acc;
    }, {});
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories });
  });
};

export const requestSearch = () => (dispatch, getState) => {
  const queryParams = parseState(getState().books);
  const url = parseQuery(queryParams);

  dispatch(fetchBooksStart());
  HttpService.get(url)
    .then(({ data, params }) => dispatch(fetchSearchSuccess(data, params)))
    .catch((err) => dispatch(fetchBooksFailure(err)));
};

export const getBookById = (id) => (dispatch) => {
  return HttpService.get(`/books/${id}`).then(({ data }) => dispatch({ type: GET_BOOK_BY_ID, currentBook: data }));
};
