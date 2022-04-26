import React from "react";
import "./Linktree.css";
const Linktree = () => {
  return (
    <div className="linktree-container">
      <h1>Useful Links</h1>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=pio6rOe31ag"
          >
            Texas Talaash Legends Performance
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1eQqKC-XTuZt-RDV77rZtxi7bReRfWh2l/view?usp=sharing"
          >
            Spring 2021 Audition Mix
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.gofundme.com/f/donate-to-support-talaash-at-legends?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
          >
            Talaash GoFundMe
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.gigsalad.com/texas_talaash_irving"
          >
            Book Talaash for your event!
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Linktree;
