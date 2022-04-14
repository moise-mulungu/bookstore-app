import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { del, getBooks } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const removeBook = (event) => {
    dispatch(del(event.target.value));
    dispatch(getBooks());
  };

  return (
    <div className="bookCard">
      <div className="">
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" value={book.id} onClick={removeBook}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="book-data">
        <div>
          <p>{book.status}</p>
          <p>{book.currentChapter}</p>
          <p>{book.chapterNumber}</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
