import React from "react";
import cover from "../assets/cover-photo.png";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="home-page">
      <img src={cover} alt="Cover Photo" className="cover-photo" />
      <section className="stats">
        <div className="num-container">
          <div className="num-elems">
            <p className="num">2100+</p>
            <p className="num-text">Mentees</p>
          </div>
          <div className="num-elems">
            <p className="num">150+</p>
            <p className="num-text">Mentors</p>
          </div>
          <div className="num-elems">
            <p className="num">60+</p>
            <p className="num-text">Sponsors</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
