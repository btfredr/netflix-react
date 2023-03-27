import React from "react";
import logo from "../assets/netflix.png";
import avatar from "../assets/avatar.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <img className="nav__logo" src={logo} alt="Netflix logo" />
        <img className="nav__avatar" src={avatar} alt="User avatar" />
      </div>
    </div>
  );
};

export default Nav;
