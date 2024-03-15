import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import "./App.css";
import LoginPage from "./layouts/LoginPage.jsx";
// Import other components

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/blog" element={<div>Blog Component</div>} />
          <Route path="/about" element={<div>About Us Component</div>} />
          <Route path="/donate" element={<div>Donate Component</div>} />
          <Route path="/login" element={<LoginPage />} />
          {/* Define more routes as needed */}
        </Routes>
      </Router>
    </main>
  );
}

export default App;
