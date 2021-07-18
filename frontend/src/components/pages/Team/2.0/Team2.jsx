import React, { Component } from "react";
import Slider from "../../../slider/Slider";
import "./IndvTeam.css";
const Team2 = () => {
  return (
    <>
      <div className="team-image-container">
        <h1>Talaash 2.0</h1>
        <Slider />
        <img src="/src/assets/2.0/team-pics/2.0-goofy.jpg" alt="" />
      </div>
    </>
  );
};

export default Team2;
