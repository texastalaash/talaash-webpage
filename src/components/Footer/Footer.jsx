import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="footer">
      <div className="hr-container">
        <hr />
      </div>
      <div className="footer-content">
        <p className="copyright">© 2022 Texas Talaash</p>
        <p>
          Created with <i className="fa-solid fa-heart"></i> by{" "}
          <a href="https://manishbh.com">Manish Bhandari</a>
        </p>
        <p></p>
      </div>
    </section>
  );
}

export default Footer