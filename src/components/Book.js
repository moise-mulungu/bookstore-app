import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { del } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const removeBook = (event, bookId) => {
    event.preventDefault();
    dispatch(del(bookId));
  };

  return (
    <div className="bookCard" id={book.id}>
      <div className="bookDetails">
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul className="bookButtons">
          <li><button className="bookButton" type="button">Comments</button></li>
          <li><button className="rmv" type="button" onClick={(event) => removeBook(event, book.item_id)}>Remove</button></li>
          <li><button className="bookButton" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div className="chart">
          <div className="ProgressBar">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle" />
              </div>
            </div>
          </div>
          <div className="percentage">
            <h2>64%</h2>
            <p className="status">Completed</p>
          </div>
        </div>
        <div className="rightSection">
          <p className="status">currentChapter</p>
          <p>chapterNumber</p>
          <button className="buttonProgress" type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
