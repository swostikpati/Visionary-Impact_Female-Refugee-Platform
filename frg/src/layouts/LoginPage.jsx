import React from "react";
import img from "../assets/login_page.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <img src={img} alt="Login Page" className="img" />
      <button className="create-account-button">Create New Account</button>
    </div>
  );
};

export default LoginPage;
