import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
export class Team extends Component {
  render() {
    return (
      <div className="timeline-container">
        <h2>Team</h2>
        <Link to="/team/2.0">2.0 page</Link>
      </div>
    );
  }
}

export default Team;
