import { Link } from "react-router-dom";
import "./Bubble.css";

const Bubble = ({ name, isCap, info }) => {
  let full_name = name.split(" ");
  let first = full_name[0];
  let last = full_name[1];
  const initial = first[0] + last[0];

  return (
    <div className={isCap ? "cap-border" : "no-border-bubble-container"}>
      <div className="bubble-container">
        <img
          className="bubble-image"
          src={"/assets/team-pics/2/headshots/" + name + ".jpg"}
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
