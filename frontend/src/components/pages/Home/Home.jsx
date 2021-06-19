import React, { Component } from "react";
import "./Home.css";
import FadeIn from "react-fade-in";

export class Home extends Component {
  render() {
    return (
      <>
        <section className="cover">
          <FadeIn>
            <div className="cover-text">
              <h1>TEXAS TALAASH</h1>
              <p>UT Austin's Premier Male Fusion Dance Team</p>
            </div>
          </FadeIn>
        </section>
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
