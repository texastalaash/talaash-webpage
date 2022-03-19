let SliderImages = {};

SliderImages["image1"] = require("./").default;
SliderImages["image2"] = require("./Component2").default;
SliderImages["image3"] = require("./Component3").default;

const images = importAll(
  require.context(
    "../../../assets/team-pics/2/slider/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
export default SliderImages;
