import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = () => {
  return (
  <section class="timeline">
    {/* <h1>Timeline</h1>
    <Link to="/team/1">1.0</Link>
    <Link to="/team/2">2.0</Link>
    <Link to="/team/3">3.0</Link> */}
      <h1>Team History</h1>
      <div class="container">
        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content js--fadeInLeft">
            <h2>Title</h2>
            <div class="date">1 MAY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a class="bnt-more" href="javascript:void(0)">
              More
            </a>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content timeline-card js--fadeInRight">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content js--fadeInLeft">
            <div class="date">3 JUN 2016</div>
            <h2>Quote</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              explicabo debitis omnis dolor iste fugit totam quasi inventore!
            </blockquote>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content js--fadeInRight">
            <h2>Title</h2>
            <div class="date">22 JUN 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a class="bnt-more" href="javascript:void(0)">
              More
            </a>
          </div>
        </div>


        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card js--fadeInRight">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div class="date">30 JULY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a class="bnt-more" href="javascript:void(0)">
              More
            </a>
          </div>
        </div>


      
      </div>
    </section>      
  );
};

export default Timeline;
