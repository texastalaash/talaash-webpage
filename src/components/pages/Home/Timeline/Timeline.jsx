import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = () => {
  return (
    <section class="timeline-section">
      {/* <h1>Timeline</h1>
    <Link to="/team/1">1.0</Link>
    <Link to="/team/2">2.0</Link>
    <Link to="/team/3">3.0</Link> */}
      <h1>Team History</h1>
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              {/* <h2>Talaash 3.0</h2> */}
              <img src="/assets/team-pics/3/team.jpg" alt="team image" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              {/* <h2>Talaash 3.0</h2> */}
              <img src="/assets/team-pics/3/team.jpg" alt="team image" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              {/* <h2>Talaash 3.0</h2> */}
              <img src="/assets/team-pics/3/team.jpg" alt="team image" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
