import "./Performances.css";
import ReactPlayer from "react-player";

const Performances = ({ videos }) => {
  return (
    <div className="performances-wrapper">
      <h1>Performances</h1>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div className="video-wrapper" key={index}>
            <ReactPlayer
              className="react-player"
              url={video}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performances;
