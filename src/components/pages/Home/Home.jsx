import React from "react";
import "./Home.css";
import FadeIn from "react-fade-in";
import DanceStyles from "../../DanceStyles/DanceStyles";
import Contact from "../../Contact/Contact";
import image1 from '../../../assets/cover.jpg'
import image2 from '../../../assets/cover2.jpg'
import image3 from "../../../assets/cover3.jpg";
import Linktree from "./Linktree/Linktree";


const bgImages = [image1,image2,image3];
const Home = () => {
      // const [bgImage, setbgImage] = useState(bgImages[0]);
      // const [bgIndex, setBgIndex] = useState(0);
      const myStyle = {
        backgroundImage: `url(${bgImages[0]})`,
      };

    return (
      <>
        <div className="banner" style={myStyle}>
          <div className="cover">
            <FadeIn>
              <div className="cover-text">
                <h1>TEXAS TALAASH</h1>
                <p>UT Austin's Premier Male Fusion Dance Team</p>
              </div>
            </FadeIn>
            <div className="social-container">
              <div className="social-medias">
                <a
                  className="instagram"
                  href="https://instagram.com/texastalaash"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="facebook "
                  href="https://www.facebook.com/txtalaash"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCEqHo5E7qQQmawb3c14Zl-w"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <Linktree />
        </div>
        <div className="home-content">
          <div id="about" className="home-about">
            <div className="about-content">
              <h1>About Talaash</h1>
              <p>
                Texas Talaash, established in 2019, is a non-profit all male
                competetive Bollywood Fusion dance team at the University of
                Texas at Austin. We choreograph and perform across the nation
                and events on campus in dance styles such as bollywood, hiphop,
                bhangra, kuthu, and contemporary. We also strive to inspire
                students to build self-esteem, discipline, and self-confidence
                through dance arts education.
              </p>
            </div>
            {/* <Floatingshapes /> */}
          </div>
          <DanceStyles />
          <Contact />
        </div>
      </>
    );
  }

export default Home;
