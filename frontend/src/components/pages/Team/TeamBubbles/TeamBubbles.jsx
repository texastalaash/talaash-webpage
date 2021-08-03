import "./TeamBubbles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../../Spinners/Spinners";
import BubbleSection from "./BubbleSection/BubbleSection";

const TeamBubbles = () => {
  const [team, setteam] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = () => {
    axios
      .get("../data/2.json")
      .then((response) => {
        setteam(response.data.team);
        console.log(response.data.team);
        setloading(false);
      })
      .catch((error) => {
        setteam([]);
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="teambubble-container">
        <Spinner />
      </div>
    );

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
