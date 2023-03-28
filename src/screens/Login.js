import React from "react";
import logo from "../assets/netflix.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__background">
        <img src={logo} alt="Netflix logo" className="login__logo" />
        <button className="login__button">Sign in</button>
      </div>
    </div>
  );
};

export default Login;
