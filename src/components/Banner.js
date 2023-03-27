import React from "react";
import bannerblack from "../assets/bannerblack.png";

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroudSize: "cover",
        backgroundImage: `url(${bannerblack})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
