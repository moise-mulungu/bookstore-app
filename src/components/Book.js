import React from 'react';
import Proptypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div className="bookCard">
      <div className="">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <button type="button">Remove</button>
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