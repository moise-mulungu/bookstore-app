import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const configureStore = createStore(reducer);
export default configureStore;
