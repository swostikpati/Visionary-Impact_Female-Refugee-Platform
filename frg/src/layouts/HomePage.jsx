import React from "react";
import cover from "../assets/cover-photo.png";
import "./HomePage.css";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div className="home-page">
      <div>
        <img src={cover} alt="Cover Photo" className="cover-photo" />
      </div>

      <section className="stats">
        <div className="num-container ">
          <div className="num-elems mentees">
            <p className="num">2100+</p>
            <p className="num-text">Mentees</p>
          </div>
          <div className="num-elems mentors">
            <p className="num">150+</p>
            <p className="num-text">Mentors</p>
          </div>
          <div className="num-elems sponsors">
            <p className="num">60+</p>
            <p className="num-text">Sponsors</p>
          </div>
        </div>
      </section>

      <section className="our-sponsors">
        <p>Our Top Sponsors</p>
        <div className="logos"></div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
