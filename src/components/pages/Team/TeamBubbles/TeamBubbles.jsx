import "./TeamBubbles.css";
import { useEffect} from "react";
import BubbleSection from "./BubbleSection/BubbleSection";

const TeamBubbles = ({team, year}) => {

  useEffect(() => {
  }, []);

  return (
    <div className="team-bubble-container">
      <BubbleSection
        label="Captains"
        list={team.filter((person) => person.role === "captain")}
        year={year}
      />
      <BubbleSection
        label="Board"
        list={team.filter(
          (person) => person.role !== "captain" && person.role !== "dancer"
        )}
        year={year}
      />
      <BubbleSection
        label="Dancers"
        list={team.filter((person) => person.role === "dancer")}
        year={year}
      />
    </div>
  );
};

export default TeamBubbles;
