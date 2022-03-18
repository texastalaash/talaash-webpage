import React, { Component } from "react";
import "./Home.css";
import FadeIn from "react-fade-in";

export class Home extends Component {
  render() {
    return (
      <>
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
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="facebook "
                href="https://www.facebook.com/txtalaash"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/channel/UCEqHo5E7qQQmawb3c14Zl-w"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="home-about">
          <h1>About Talaash</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            velit et debitis placeat, repudiandae recusandae, exercitationem
            nobis, eum odio similique perferendis omnis soluta deserunt possimus
            maxime cum modi consequuntur facilis qui? Assumenda odit nisi
            molestiae tenetur laboriosam doloribus corrupti iste repudiandae,
            dolorum magni inventore facere laborum culpa. Praesentium, nulla
            quod.
          </p>
        </div>
      </>
    );
  }
}

export default Home;
