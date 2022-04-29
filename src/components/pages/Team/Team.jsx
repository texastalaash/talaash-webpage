import React from "react";
import FadeIn from "react-fade-in";
import Performances from "./Performances/Performances";
import TeamBubbles from "./TeamBubbles/TeamBubbles";
import SimpleImageSlider from "react-simple-image-slider";

import "./Team.css";
import { useParams } from "react-router-dom";
import { data } from "./data";
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
            <div className="slider-border">
              <div className="slider-container">
                <SimpleImageSlider
                  width={"100%"}
                  height={"100%"}
                  images={sliderImages}
                  showBullets={true}
                  showNavs={true}
                  autoPlay={true}
                  bgColor={"none"}
                  navSize={window.innerWidth < 700 ? '25' : '40'}
                ></SimpleImageSlider>
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
            </div>
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
        title="Soundcloud"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780108895&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="soundcloud-player">
        <a
          href="https://soundcloud.com/akhilesh-yeleswarapu"
          title="DJ Khila"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ccccc" }}
        >
          DJ Khila
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
        title="Soundcloud"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248566905&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="soundcloud-player">
        <a
          href="https://soundcloud.com/abhishek-arnipalli"
          title="DJ ABHZ"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ccccc" }}
        >
          DJ ABHZ
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
        title="Soundcloud"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1254518806&color=%233ec891&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </div>
  );
};

export default Team;
