import React, { Component } from "react";
import "./Home.css";
import FadeIn from "react-fade-in";
import Timeline from "./Timeline/Timeline";
import Floatingshapes from "../../FloatingShapes/Floatingshapes";
import Team2 from "../Team/Team";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="cover">
            <FadeIn>
              <div className="cover-text">
                <h1>TEXAS TALAASH</h1>
                <p>UT Austin's Premier Male Fusion Dance Team</p>
              </div>
            </FadeIn>
            <div className="social-container">
              <div className="social-medias">
                <a
                  className="instagram"
                  href="https://instagram.com/texastalaash"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  className="facebook "
                  href="https://www.facebook.com/txtalaash"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCEqHo5E7qQQmawb3c14Zl-w"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-about">
            <div className="about-content">
              <h1>About Talaash</h1>
              <p>
                Texas Talaash, established in 2019, is a non-profit all male
                competetive Bollywood Fusion dance team at the University of
                Texas at Austin. We choreograph and perform across the nation
                and events on campus in dance styles such as bollywood, hiphop,
                bhangra, kuthu, and contemporary. We also strive to inspire
                students to build self-esteem, discipline, and self-confidence
                through dance arts education.
              </p>
            </div>
            <Floatingshapes />
          </div>
          <hr />
          <div className="currentteamcontainer">
            <h1 className="title">Meet the Team</h1>
            <Team2 current={true} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
