import {
  SET_SEARCH_TEMPLATE,
  SET_CHECKED_CATEGORY,
  GET_BOOK_BY_ID,
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_SEARCH_BOOKS_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
} from '../books-action-types';
import {
  setSearchTemplate,
  setCheckedCategory,
  getBookById,
  requestBooks,
  requestSearch,
  requestCategories,
} from '../books-actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { HttpService } from '../../../services/HttpService';
import { parseQuery, parseState } from '../../../helpers/settings';

const mockStore = configureMockStore([thunk]);

let store = null;
let actions = null;
beforeEach(() => {
  store = mockStore();
  actions = store.getActions();
});

jest.mock('../../../services/HttpService', () => ({
  HttpService: class {
    static get = jest.fn();
  },
}));

jest.mock('../../../helpers/settings', () => ({
  parseQuery: jest.fn(),
  parseState: jest.fn(),
}));

describe('Books actions', () => {
  describe('setSearchTemplate', () => {
    test('Should return object with correct type and template', () => {
      expect(setSearchTemplate('SomeUrl')).toEqual({ type: SET_SEARCH_TEMPLATE, template: 'SomeUrl' });
    });
  });

  describe('setCheckedCategory ', () => {
    test('Should return object with correct type and category', () => {
      expect(setCheckedCategory({ name: 'For children', checked: true })).toEqual({
        type: SET_CHECKED_CATEGORY,
        category: { name: 'For children', checked: true },
      });
    });
  });

  describe('getBookById ', () => {
    HttpService.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 1,
          title: 'Test 1',
        },
      });
    });
    test('Should return object with correct type and currentBook', async () => {
      expect(await store.dispatch(getBookById(1))).toEqual({
        type: GET_BOOK_BY_ID,
        currentBook: {
          id: 1,
          title: 'Test 1',
        },
      });
    });
  });

  describe('requestBooks ', () => {
    HttpService.get
      .mockImplementationOnce(() => {
        return Promise.resolve({
          data: {
            id: 1,
            title: 'Test 1',
          },
          params: 24,
        });
      })
      .mockImplementationOnce(() => {
        return Promise.reject('Error');
      });

    test('Should return object with correct types, fetch all books with success and handle loading', async () => {
      await store.dispatch(requestBooks());
      expect(actions[0]).toEqual({ type: FETCH_BOOKS_START });
      expect(actions[1]).toEqual({
        type: FETCH_BOOKS_SUCCESS,
        data: {
          id: 1,
          title: 'Test 1',
        },
        totalCount: 24,
      });
    });

    test('Should return object with correct types, fetch all books with failure and handle loading', async () => {
      store.dispatch(requestBooks()).then(() => {
        expect(actions[0]).toEqual({ type: FETCH_BOOKS_START });
        expect(actions[1]).toEqual({ type: FETCH_BOOKS_FAILURE, err: 'Error' });
      });
    });
  });

  describe('requestSearch ', () => {
    HttpService.get
      .mockImplementationOnce(() => {
        return Promise.resolve({
          data: {
            id: 1,
            title: 'Test 1',
          },
          params: 24,
        });
      })
      .mockImplementationOnce(() => {
        return Promise.reject('Error');
      });

    test('Should return object with correct types, fetch all books with success and handle loading', async () => {
      await store.dispatch(requestSearch());
      expect(actions[0]).toEqual({ type: FETCH_BOOKS_START });
      expect(actions[1]).toEqual({
        type: FETCH_SEARCH_BOOKS_SUCCESS,
        books: {
          id: 1,
          title: 'Test 1',
        },
        count: 24,
      });
    });

    test('Should return object with correct types, fetch all books with failure and handle loading', async () => {
      store.dispatch(requestBooks()).then(() => {
        expect(actions[0]).toEqual({ type: FETCH_BOOKS_START });
        expect(actions[1]).toEqual({ type: FETCH_BOOKS_FAILURE, err: 'Error' });
      });
    });
  });

  describe('requestCategories', () => {
    HttpService.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: ['Category1', 'Category2'],
      });
    });
    test('Should return object with correct type and currentBook', async () => {
      await store.dispatch(requestCategories());
      expect(actions[0]).toEqual({
        type: FETCH_CATEGORIES_SUCCESS,
        categories: { Category1: false, Category2: false },
      });
    });
  });
});
