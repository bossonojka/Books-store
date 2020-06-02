import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { booksReducer } from './books/books-reducer';
import { authReducer } from './auth/authReducer';
import { cartReducer } from './cart/cart-reducer';

import { persistStore, persistReducer } from 'redux-persist';
import { favouritesReducer } from './favourites/favourites-reducer';

const reducers = combineReducers({
  books: booksReducer,
  auth: authReducer,
  cart: cartReducer,
  favourites: favouritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['books'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

export { store, persistor };
