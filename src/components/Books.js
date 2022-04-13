import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { useSelector } from 'react-redux';

export default function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
}