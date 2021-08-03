import "./Slider.css";
import goofy from "../../assets/team-pics/2/photoshoot/group/2.0-goofy.jpg";
import normal from "../../assets/team-pics/2/photoshoot/group/2.0-normal.jpg";
import boat from "../../assets/team-pics/2/other/boat.jpg";
import playground from "../../assets/team-pics/2/other/playground.jpg";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 4) counter = 1;
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-border">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src={goofy} alt="" />
          </div>
          <div className="slide">
            <img src={normal} alt="" />
          </div>
          <div className="slide">
            <img src={playground} alt="" />
          </div>
          <div className="slide">
            <img src={boat} alt="" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>

          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
