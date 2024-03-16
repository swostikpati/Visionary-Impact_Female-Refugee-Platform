// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="first-group-elems">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/blog" className="nav-item">
          Blog
        </Link>
        <Link to="/about" className="nav-item">
          About Us
        </Link>
        <Link to="/donate" className="nav-item">
          Donate
        </Link>
      </div>
      <div>
        <a
          href="https://www.figma.com/proto/GcHNSUYWymnAkG6xu0m3AM/HTG?type=design&node-id=484-2176&t=8Os70IRZTGZNOSbH-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=484%3A2176&show-proto-sidebar=1"
          className="nav-item login "
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma Prototype
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
