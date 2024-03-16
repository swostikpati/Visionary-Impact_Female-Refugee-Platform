import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import "./App.css";
import LoginPage from "./layouts/LoginPage.jsx";
import HomePage from "./layouts/HomePage.jsx";
import Blog from "./layouts/Blog.jsx";
import About from "./layouts/About.jsx";
import Donate from "./layouts/Donate.jsx";
import Footer from "./components/Footer.jsx";
// Import other components

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Define more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
