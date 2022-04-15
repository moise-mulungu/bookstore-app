import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [categoryState, setCategory] = useState('');

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: categoryState,
    };
    dispatch(add(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  }

  return (
    <div className="addForm">
      <h3>Add New Book</h3>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book Title" value={title} onChange={(event) => setTitle(event.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        <select type="text" onChange={(event) => setCategory(event.target.value)}>
          <option value="category">category</option>
          <option value="Science">Science</option>
          <option value="Classics">Classics</option>
          <option value="Novel">Novel</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comic">Comic</option>
          <option value="Detective">Detective</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
