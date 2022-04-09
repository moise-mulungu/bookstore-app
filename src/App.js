import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation';
import Books from './components/Books';
import Categories from './components/Categories';
import AppNav from './components/Navigation';

const books = [
  {
    id: 1,
    genre: 'genre',
    title: 'book title',
    author: 'author',
    status: 'complete',
    currentChapter: 'Current chapter',
    chapterNumber: 'Chapter #number',
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