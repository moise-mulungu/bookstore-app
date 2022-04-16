import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';

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
        <img src={icon} alt="profile" />
      </div>
    </nav>
  );
}
