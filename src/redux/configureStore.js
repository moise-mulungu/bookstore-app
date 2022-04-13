import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
