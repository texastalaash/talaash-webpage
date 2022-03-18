import React from "react";
import FadeIn from "react-fade-in";
import Slider from "../../../slider/Slider";
import Performances from "./Performances/Performances";
import TeamBubbles from "../TeamBubbles/TeamBubbles";

import "./Team.css";
import { useParams } from "react-router-dom";

const Team2 = () => {
  const { year } = useParams();

  return (
    <FadeIn>
      <div className="team-container">
        <div className="top-slides-display">
          <h1 className="team-title">Talaash {year}.0</h1>
          <Slider />
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
        <TeamBubbles />
        <hr />
        <Performances
          videos={[
            "https://www.youtube.com/watch?v=vr5QwTXh5t8",
            "https://www.youtube.com/watch?v=OPRumImYUPU",
            "https://www.youtube.com/watch?v=8ztoXsv9hKc",
          ]}
        />
      </div>
    </FadeIn>
  );
};

export default Team2;
