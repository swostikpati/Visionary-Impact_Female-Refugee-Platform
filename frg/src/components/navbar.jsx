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
        <Link to="/login" className="nav-item login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
