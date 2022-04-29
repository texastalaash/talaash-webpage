import { Link } from "react-router-dom";
import "./Bubble.css";

const Bubble = ({ name, isCap, info, year }) => {
  let full_name = name.split(" ");
  let first = full_name[0];
  let last = full_name[1];
  const initial = first[0] + last[0];
  const fileName = `${first}-${last}.jpg`

  return (
    <div className={isCap ? "cap-border" : "no-border-bubble-container"}>
      <div className="bubble-container">
        <img
          className="bubble-image"
          src={`/assets/team-pics/${year}/headshots/${fileName}`}
          // src={`/assets/team-pics/3/headshots/ManishBhandari.jpg`}
          alt={initial}
          onError={() => <h1>hey</h1>}
        />
        {/* <h2 className="initials">{initial}</h2> */}
        <Link
          to={`/profile/${first.toLowerCase()}-${last.toLowerCase()}`}
          className="image-overlay"
        >
          <p className="hover-name">{name}</p>
        </Link>
      </div>
    </div>
  );
};

export default Bubble;
