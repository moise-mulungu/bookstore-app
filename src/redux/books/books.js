const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9Mp6empbKHhj96nJbJTP/books';
const ADD = 'add';
const DEL = 'del';
const UPDATE = 'getBooks';

const initialState = [];

// Actions

export const add = (book) => async (dispatch) => {
  await fetch(API, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD, payload: book }),
      () => dispatch({ type: ADD, payload: null }),
    );
};
export const del = (bookId) => async (dispatch) => {
  await fetch(`${API}/${bookId}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: bookId }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: DEL, payload: bookId }),
      () => dispatch({ type: DEL, payload: null }),
    );
};
export const getBooks = () => async (dispatch) => {
  await fetch(API)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: UPDATE, payload: data }),
      () => dispatch({ type: UPDATE, payload: [] }),
    );
};
// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DEL:
      return state.filter((book) => book.item_id !== action.payload);
    case UPDATE: {
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};
export default booksReducer;
