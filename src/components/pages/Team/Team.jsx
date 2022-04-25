import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import Slider from "../../slider/Slider";
import Performances from "./Performances/Performances";
import TeamBubbles from "./TeamBubbles/TeamBubbles";

import "./Team.css";
import { useParams } from "react-router-dom";
import { data } from "./data";
import { useLocation } from "react-router-dom";
import { YearData } from "./Timeline/YearData";

const Team = ({ current }) => {
  let { year } = useParams();

  if (current) {
    year = 3;
  }

  const soundclouds = [<Mix/>, <Mix2/>, <Mix3/>];

  const teamdata = data[year].team;
  const performances = data[year].performances;
  const sliderImagePath = `../../../assets/team-pics/${year}/slider/`;
  const sliderImages = [];
  for (var i = 1; i <= data[year].sliderTotal; i++) {
    sliderImages.push(sliderImagePath + i + ".jpg");
  }

  return (
    <FadeIn>
      <div className="team-background">
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
          {YearData[year - 1].competitions ? (
            <div className="season-content">
              <div className="season-about">
                <h1>{`Our ${YearData[year - 1].year} season`}</h1>
                <p className="year-about">{YearData[year - 1].about}</p>
              </div>
              <div className="competitions">
                {YearData[year - 1].competitions.map((competition, index) => (
                  <div className="competition" key={index}>
                    <img src={competition.src} alt="" />
                    <div className="competition-details">
                      <h1>{competition.name}</h1>
                      <p className="location">{competition.location}</p>
                      <p className="date">{competition.date}</p>
                      <p className="placement">{competition.placement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          <Performances videos={performances} />
          {soundclouds[year - 1]}  
        </div>
      </div>
    </FadeIn>
  );
};

const Mix = () => {
  return (
    <div className="soundcloud-container">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780108895&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="soundcloud-player">
        <a
          href="https://soundcloud.com/akhilesh-yeleswarapu"
          title="DJ Khila"
          target="_blank"
          style={{ color: "#ccccc" }}
        >
          DJ Khila
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/akhilesh-yeleswarapu/texas-talaash-1"
          title="Texas Talaash 1.0 ft. DJ Law, Aka$h, DJ RB  [EXPLICIT] (no voiceovers)"
          target="_blank"
          style="color: #cccccc; text-decoration: none;"
        >
          Texas Talaash 1.0 ft. DJ Law, Aka$h, DJ RB [EXPLICIT] (no voiceovers)
        </a>
      </div>
    </div>
  );
};

const Mix2 = () => {
  return (
    <div className="soundcloud-container">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248566905&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="soundcloud-player">
        <a
          href="https://soundcloud.com/abhishek-arnipalli"
          title="DJ ABHZ"
          target="_blank"
          style={{ color: "#ccccc" }}
        >
          DJ ABHZ
        </a>
        <a
          href="https://soundcloud.com/abhishek-arnipalli/texas-talaash-2020-2021-team-mix-ft-bunny"
          title="Texas Talaash 2020 - 2021 Team Mix (ft. BUNNY)"
          target="_blank"
        >
          Texas Talaash 2020 - 2021 Team Mix (ft. BUNNY)
        </a>
      </div>
    </div>
  );
};

export const Mix3 = () => {
  return (
    <div className="soundcloud-container">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1254518806&color=%233ec891&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="soundcloud-player">
        <a
          href="https://soundcloud.com/kabir_bhakta"
          title="BUNNY"
          target="_blank"
          style={{ color: "#ccccc" }}
        >
          BUNNY
        </a>
        <a
          href="https://soundcloud.com/kabir_bhakta/texas-talaash-legends-2022"
          title="Texas Talaash @ Legends 2022 (ft. Bassdoctor, DJ Subsonic, cHAoS, D-ASH)"
          target="_blank"
        >
          Texas Talaash @ Legends 2022 (ft. Bassdoctor, DJ Subsonic, cHAoS,
          D-ASH)
        </a>
      </div>
    </div>
  );
};

export default Team;
