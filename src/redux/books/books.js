// Actions
const ADD = 'bookstore/books/add';
const DEL = 'bookstore/books/del';

// Empty array of books
const initialState = [];

// Reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, {
        ...action.payload,
      }];
    case DEL:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action Creators
export function add(book) {
  return {
    type: ADD,
    payload: { book },
  };
}

export function del(id) {
  return {
    type: DEL,
    payload: { id },
  };
}
