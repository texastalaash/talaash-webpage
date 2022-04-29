import "./Performances.css";
import YouTube, {YouTubeProps} from "react-youtube";

const Performances = ({ videos }) => {

  const height = window.innerWidth > 700 ? '100%': '10px';
  const width = window.innerWidth > 700 ? "100%" : "150px";


  const opts = {
    height: '100%',
    width: '100%'
  }
  return (
    <div className="performances-wrapper">
      <h1>Performances</h1>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div className="video-wrapper" key={index}>
            <YouTube 
            videoId={video}
            opts={opts}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performances;
