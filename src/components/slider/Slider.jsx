import "./Slider.css";
import { useEffect } from "react";

const Slider = ({ images }) => {
  console.log(images.length)
  useEffect(() => {
    document.getElementById("radio1").checked = true;
    var counter = 1;
    const interval = setInterval(() => {
      var buttons = document.getElementsByName("radio-btn");
      console.log(buttons)
      for (var i = 1; i <= buttons.length; i++) {
        if (buttons[i-1].checked) {
          counter = (i % images.length) + 1;
        }
      }
      document.getElementById("radio" + counter).checked = true;
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="slider-border">
      <div className="slider">
        <div className="slides">
          {images.map((img, index) => (
            <input
              key={index}
              type="radio"
              name="radio-btn"
              id={`radio${index + 1}`}
            />
          ))}

          {images.map((img, index) => (
            <div className={index === 0 ? "slide first" : "slide"} key={index}>
              <img src={img} alt="" />
            </div>
          ))}

          <div className="navigation-auto">
            {images.map((img, index) => (
              <div key={index} className={`auto-btn${index + 1}`}></div>
            ))}
          </div>
          <div className="navigation-manual">
            {images.map((img, index) => (
              <label
                htmlFor={`radio${index + 1}`}
                className="manual-btn"
                key={index}
              ></label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
