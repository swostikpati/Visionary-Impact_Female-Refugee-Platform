import React from "react";
import "./About.css";
import test from "../assets/mentees.png";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import swostik from "../assets/swostikpati.jpg";
import daniel from "../assets/daniel.png";
import qi from "../assets/qi.jpg";
import max from "../assets/max.jpg";

export default function About() {
  return (
    <div className="about">
      <section>
        <div className="mission">
          <img src={mission} alt="mission"></img>
          <div>
            <p className="label">Our Mission</p>
            <p className="description">
              Transforming Lives and Cultivating Hope: We are committed to
              empowering refugee women by unlocking doors to meaningful
              employment opportunities. Our mission is a beacon of empowerment,
              guiding these resilient souls towards self-sufficiency, dignity,
              and a brighter future through comprehensive employment support.
            </p>
          </div>
        </div>
        <div className="vision">
          <div>
            <p className="label">Our Vision</p>
            <p className="description">
              Building Bridges to a Unified Future: Our vision is to pioneer the
              integration of refugees into the fabric of society through an
              abundance of resources. We envision a world where refugees are not
              seen through the lens of displacement but as integral members of
              the community, thriving through solidarity and enriched by diverse
              cultures and contributions
            </p>
          </div>
          <img src={vision} alt="vision-image"></img>
        </div>
      </section>
      <section className="team">
        <p className="heading">Our Team</p>
        <div>
          <div className="people">
            <img src={swostik}></img>
            <p>Swostik Pati</p>
            <p>The Technical Alchemist</p>
          </div>
          <div className="people">
            <img src={daniel}></img>
            <p> Daniel Zuyev</p>
            <p>The Financial Architect</p>
          </div>
          <div className="people">
            <img src={qi}></img>
            <p> Zitao Qi</p>
            <p> The Entrepreneur</p>
          </div>
          <div className="people">
            <img src={max}></img>
            <p>Ziray Maximilian Lin</p>
            <p> The Problem Detective</p>
          </div>
        </div>
      </section>
    </div>
  );
}
