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


  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context('../../../assets/team-pics/2/slider/', false, /\.(png|jpe?g|svg)$/)
  );

  console.log(teamdata);


  return (
    <FadeIn>
      <div className="team-container">
        <div className="top-slides-display">
          <h1 className="team-title">Talaash {year}.0</h1>

          <Slider images={sliderImages} />
          <img
            className="floating-left"
            src={`/assets/team-pics/${year}/floating/left.png`}
            alt="floating-left"
          />
          <img
            className="floating-right"
            src={`/assets/team-pics/${year}/floating/right.png`}
            alt="floating-right"
          />
        </div>
        <hr />
        <TeamBubbles team={teamdata} year={year} />
        <hr />
        <Performances videos={performances} />
      </div>
    </FadeIn>
  );
};

export default Team2;
