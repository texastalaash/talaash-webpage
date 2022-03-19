import Bubble from "../Bubble/Bubble";
import "./BubbleSection.css";

const BubbleSection = ({ label, list, year }) => {
  return (
    <div className="bubble-section-container">
      <h1>{label}</h1>
      <div className="bubbles-wrapper">
        {list.map((person, index) => (
          <Bubble
            key={index}
            name={person.name}
            isCap={person.role === "captain"}
            year={year}
          />
        ))}
      </div>
    </div>
  );
};

export default BubbleSection;
