import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";
import { YearData } from "./YearData";

const Timeline = () => {
  return (
    <section class="timeline-section">
      {/* <h1>Timeline</h1>
    <Link to="/team/2">2.0</Link>
    <Link to="/team/3">3.0</Link> */}
      <h1>Team History</h1>
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content hvr-float">
              <p>
                3.0 | <span>2021 - 2022</span>
              </p>
              <div className="card-border">
                <Link to="/team/3">
                  <img src="/assets/team-pics/3/team.jpg" alt="team image" />
                </Link>
                <div className="info">
                  <h2>Cosmos</h2>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content hvr-float">
              <p>
                2.0 | <span>2020 - 2021</span>
              </p>
              <div className="card-border">
                <Link to="/team/2">
                  <img
                    src="/assets/team-pics/2/slider/2.jpg"
                    alt="team image"
                  />
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content hvr-float">
              <p>
                1.0 | <span>2019 - 2020</span>
              </p>
              <div className="card-border">
                <Link to="/team/1">
                  <img
                    src="/assets/team-pics/1/slider/1.jpg"
                    alt="team image"
                  />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
