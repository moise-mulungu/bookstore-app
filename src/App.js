import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import AppNav from './components/Navigation';

const books = [
  {
    id: 1,
    title: 'book title',
    author: 'author',
    status: 'complete',
  },
];

export default function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        <Route exact path="/" element={<Books books={books} />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}