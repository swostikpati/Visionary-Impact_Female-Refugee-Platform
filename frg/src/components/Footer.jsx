import React from "react";
import "./Footer.css"; // Path to your CSS file for styling the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>New Horizon Hopes, London, UK</p>
          <p>Email: info@newhorizonhopes.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.facebook.com">Facebook</a>
          </p>
          <p>
            <a href="https://www.twitter.com">Twitter</a>
          </p>
          <p>
            <a href="https://www.instagram.com">Instagram</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Disclaimer</h4>
          <p>
            Please note that the company featured on this website is fictitious
            and has been created solely for the purpose
            <br /> of the "Hack the Globe" hackathon organized by BCG. All
            content, including text, images, and multimedia, <br />
            is provided for simulation purposes only and does not pertain to any
            real entity or organization.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} New Horizon Hopes | All Rights
        Reserved
      </div>
    </footer>
  );
}

export default Footer;
