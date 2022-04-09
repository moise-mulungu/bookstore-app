import React from 'react';

export default function AddBook() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Add book..." />
        <select key="author">
          <option value="Category">all authors</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
