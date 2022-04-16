import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [categoryState, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      category: categoryState,
      title,
      author,
    };
    dispatch(add(newBook));
  }

  const handler = (event) => {
    event.preventDefault();
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="addForm">
      <hr className="formLine" />
      <h3>Add New Book</h3>
      <form onSubmit={handler}>
        <input type="text" placeholder="Book Title" value={title} onChange={(event) => setTitle(event.target.value)} required />
        <input type="text" className="Author" placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
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
        <button type="submit" onClick={(event) => submitBookToStore(event)}>Add Book</button>

      </form>
    </div>
  );
}
