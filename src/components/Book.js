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
      <div className="bookInfo">
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul className="smallButtons">
          <li><button className="smallButton" type="button">Comments</button></li>
          <li><button className="smallButton" type="button" value={book.id} onClick={removeBook}>Remove</button></li>
          <li><button className="smallButton" type="button">Edit</button></li>
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
          <div className="percentages">
            <h2>47%</h2>
            <p className="status">Completed</p>
          </div>
        </div>
        <div className="rightSection">
          <p className="status">currentChapter</p>
          <p>chapterNumber</p>
          <button className="bookButton" type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
