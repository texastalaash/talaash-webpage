import React from "react";
import FadeIn from "react-fade-in";
import Slider from "../../slider/Slider";
import Performances from "./Performances/Performances";
import TeamBubbles from "./TeamBubbles/TeamBubbles";

import "./Team.css";
import { useParams } from "react-router-dom";
import {data} from './data'
const Team2 = () => {
  const { year } = useParams();

  const teamdata = data[year].team;
  console.log(data[year]);
  const performances = data[year].performances;
  const sliderImagePath = `../../../assets/team-pics/${year}/slider/`;
  const sliderImages = [];
  for (var i = 1; i <= data[year].sliderTotal; i++) {
    sliderImages.push(sliderImagePath + i + ".jpg");
  }


  return (
    <FadeIn>
      <div className="team-container">
        <div className="top-slides-display">
          <h1 className="team-title">Talaash {year}.0</h1>
          
          <Slider images={sliderImages}/>
          <img
            className="floating-left"
            src="/assets/team-pics/2/floating-png/Adithya.png"
            alt="arnav-floating"
          />
          <img
            className="floating-right"
            src="/assets/team-pics/2/floating-png/Arnav.png"
            alt="adi-floating"
          />
        </div>
        <hr />
        <TeamBubbles team={teamdata} />
        <hr />
        <Performances videos={performances} />
      </div>
    </FadeIn>
  );
};

export default Team2;
