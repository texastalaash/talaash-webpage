import React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { useEffect } from "react";
import "./Linktree.css";
import FadeIn from "react-fade-in";

const Linktree = () => {

    let isMobile = window.innerWidth < 700;
    const [active, setActive] = useState(false);
    const [links,setLinks] = useState([]);

    useEffect(() => {
        fetch("https://talaashlinktree.herokuapp.com/api")
          .then((response) => response.json())
          .then((data) => setLinks(data.links));
    },[])
    
      const toggleButton = () => {
        setActive(!active);
      };

    //   const options = {
    //     urls: ["http://linktr.ee/texastalaash"],
    //   };

        // scrape(options).then((result) => {console.log(result)});
      
  return (
    <Draggable
      handle={active ? "" : "button"}
      disabled={isMobile ? true : false}
    >
      <div className="linktree-container">
        <button className="linktree-button" onClick={toggleButton}>
          <i className={`fa-solid ${active ? "fa-xmark" : "fa-link"}`}></i>
        </button>
        <div className={active ? "linktree-box active" : "linktree-box"}>
          <h1>Useful Links</h1>
          <FadeIn>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a target="_blank" rel="noreferrer noopener" href={link.url}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </Draggable>
  );
};

export default Linktree;
