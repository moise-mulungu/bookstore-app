// Actions
const CHECKSTATUS = 'bookstore-app/categories/checkStatus';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';
    default: return state;
  }
}

// Action creators
export function CheckStatus(id) {
  return {
    type: CHECKSTATUS,
    payload: { id },
  };
}
