import React from "react";
import cover from "../assets/cover-photo.png";
import refugee1 from "../assets/refugee1.png";
import refugee2 from "../assets/refugee2.png";
import refugee3 from "../assets/refugee3.png";
import "./HomePage.css";
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

      <section className="stories">
        <p>Our Success Stories</p>
        <div className="story-cards">
          <div className="story-card">
            <img src={refugee1} alt="Cover Photo" />
            <p>"In unity, our differences shine."</p>
          </div>
          <div className="story-card">
            <img src={refugee2} alt="Cover Photo" />
            <p>"Independence blooms within me."</p>
          </div>
          <div className="story-card">
            <img src={refugee3} alt="Cover Photo" />
            <p>"Laughter, our universal language."</p>
          </div>
        </div>
      </section>

      <section className="our-sponsors">
        <p>Our Top Sponsors</p>
        <div className="logos"></div>
      </section>
    </div>
  );
}

export default HomePage;
