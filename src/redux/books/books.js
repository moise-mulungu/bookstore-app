// id: REgULIZ1z31eifsbdnzL
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/REgULIZ1z31eifsbdnzL';

// Actions
const ADD = 'add';
const DEL = 'del';
const UPDATE = 'getBooks';

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
      return [...state.filter((book) => book.id !== action.payLoad.id)];
    case UPDATE:
      return [
        ...action.payload,
      ];
    default: return state;
  }
}

export const getBooks = () => (dispatch) => fetch(`${API}/books`,
  {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json()).then((data) => {
  const books = Object.keys(data).map((key) => {
    const book = data[key][0];
    return {
      id: key,
      ...book,
    };
  });
  dispatch({ type: UPDATE, payload: books });
}).catch(() => {});

export const add = (book) => (dispatch) => fetch(
  `${API}/books`,
  {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  },
).then((res) => {
  if (res.ok) {
    dispatch({
      type: ADD,
      payload: book,
    });
  }
});

export const del = (bookId) => (dispatch) => {
  const body = {
    item_id: bookId,
  };
  return fetch(`${API}/books/${bookId}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    }).then((res) => {
    if (res.ok) {
      dispatch({
        type: DEL,
        id: bookId,
      });
    }
  }).catch(() => {});
};