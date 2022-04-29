import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_si1sz48",
        "template_39fd6q9",
        e.target,
        "lN_QS0T5yTwnbnrAR"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <section id="contact">
      <h1 className="section-header">Contact Us</h1>

        <form
          id="contact-form"
          className="form-horizontal"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            required
          />
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="EMAIL"
            name="email"
            required
          />
          <input
            type="subject"
            className="form-control"
            id="subject"
            placeholder="SUBJECT"
            name="subject"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
          ></textarea>
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            SEND
          </button>
        </form>
    </section>
  );
};

export default Contact;
