import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1>Timeline</h1>
      <Link to="/team/1">1.0</Link>
      <Link to="/team/2">2.0</Link>
      <Link to="/team/3">3.0</Link>
    </div>
  );
};

export default Timeline;
