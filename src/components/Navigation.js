import React from 'react';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav>
      <div className="NavBar">
        <h2>Bookstore CMS</h2>
        <ul className="navSection">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </nav>
  );
}