import React, { useEffect, useState } from "react";
import logo from "../assets/netflix.png";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  // function to make nav background black when user scrolls down the page
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // adding event listener to navbar when user scrolls, and adding the apprapriate className
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={logo}
          alt="Netflix logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src={avatar}
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
