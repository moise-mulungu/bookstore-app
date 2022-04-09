import React from 'react';
import Proptypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

export default function Books({ books }) {
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
}

Books.propTypes = {
  books: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};
