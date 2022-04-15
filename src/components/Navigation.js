import React from 'react';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav className="navContainer">
      <div className="navItems">
        <h1 id="navTitle">Bookstore CMS</h1>
        <ul className="navPages">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className="icon">
        <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />
      </div>
    </nav>
  );
}
