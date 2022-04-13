// Actions
const ADD = 'add';
const DEL = 'del';

// Empty array of books
const initialState = [{
  id: '1',
  genre: 'genre',
  title: 'book title',
  author: 'author',
  status: 'complete',
  currentChapter: 'Current chapter',
  chspterNumber: 'Chapter number',
},
];

// Reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, {
        ...action.payload,
      }];
    case DEL:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default: return state;
  }
}

// Action Creators
export function add(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function del(id) {
  return {
    type: DEL,
    payload: { id },
  };
}
