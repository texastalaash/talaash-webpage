import React from 'react'
import { stylesData } from './stylesData'
import './DanceStyles.css'
const DanceStyles = () => {
  return (
    <div className="dance-styles-wrapper">
      <div className="dance-styles-title">
        <h1>Dance Styles</h1>
        <p>
          Bollywood Fusion teams blend various aspects of Indian styles and
          Western influences to showcase a cohesive performance guided by a
          strong storyline
        </p>
      </div>
      <section className="dance-styles">
        {stylesData.map((style, index) => (
          <div key={index} className="style-card hvr-float">
            <img src={style.src} alt={style.name} />
            <p>{style.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DanceStyles