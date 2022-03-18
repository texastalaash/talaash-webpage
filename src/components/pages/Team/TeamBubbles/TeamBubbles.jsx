import "./TeamBubbles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../../Spinners/Spinners";
import BubbleSection from "./BubbleSection/BubbleSection";

const TeamBubbles = ({team}) => {

  useEffect(() => {
  }, []);

  console.log(team);

  return (
    <div className="team-bubble-container">
      <BubbleSection
        label="Captains"
        list={team.filter((person) => person.role === "captain")}
      />
      <BubbleSection
        label="Board"
        list={team.filter(
          (person) => person.role !== "captain" && person.role !== "dancer"
        )}
      />
      <BubbleSection
        label="Dancers"
        list={team.filter((person) => person.role === "dancer")}
      />
    </div>
  );
};

export default TeamBubbles;
