import React, { useEffect, useState } from "react";
import logo from "../assets/netflix.png";
import avatar from "../assets/avatar.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.showY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className="nav nav__black">
      <div className="nav__content">
        <img className="nav__logo" src={logo} alt="Netflix logo" />
        <img className="nav__avatar" src={avatar} alt="User avatar" />
      </div>
    </div>
  );
};

export default Nav;
