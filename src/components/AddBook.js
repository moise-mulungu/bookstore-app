import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  function submitBookToStore (event) {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre: document.getElementById('bookgenre').value,
    };
    dispatch(add(newBook));
    setTitle('');
    setAuthor('');
  }
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Add book..." value={title} onChange={(event) => setTitle(event.target.value)} required/>
        <input type="text" placeholder="Book title" value={author} onChange={(event) => setAuthor(event.target.value)} required/>
        <select id='bookgenre' key="genre" defaultValue="Genre">
          <option value="all authors">all authors</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
