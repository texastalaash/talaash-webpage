import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";
import { YearData } from "./YearData";
import FadeIn from "react-fade-in";

const Timeline = () => {
  return (
    <section className="timeline-section">
      {/* <h1>Timeline</h1>
    <Link to="/team/2">2.0</Link>
    <Link to="/team/3">3.0</Link> */}
      <h1>Team History</h1>
      <div className="timeline">
        <ul>
          {YearData.map((year, index) => (
            <li key={index}>
              <FadeIn>
                <div className="timeline-content hvr-float">
                  <p>
                    {year.year}: {year.theme}
                  </p>
                  <div className="card-border">
                    <Link to={`/team/${index + 1}`}>
                      <img src={year.src} alt="team" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </li>
          )).reverse()}
        </ul>{" "}
      </div>
    </section>
  );
};

export default Timeline;
