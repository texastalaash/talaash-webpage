import React from "react";
import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];

  //validate email input

  const formValidation = () => {
    setErrorMessages([]);
    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isSubjectValid = subject !== "";
    if (!isNameValid) {
      errors.push("Name field is empty.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid.");
    }
    if (email === "") {
      errors.push("Email field is empty.");
    }
    if (!isMessageValid) {
      errors.push("Message field is empty.");
    }
    if (!isSubjectValid) {
      errors.push("Subject field is empty.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      // alert("Email Sent");
    }
  };
  function ValidateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

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
          role="form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            required
            onChange={(e) => setName({ name: e.target.value })}
          />
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="EMAIL"
            name="email"
            required
            onChange={(e) => setEmail({ name: e.target.value })}
          />
          <input
            type="subject"
            className="form-control"
            id="subject"
            placeholder="SUBJECT"
            name="subject"
            onChange={(e) => setSubject({ name: e.target.value })}
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            onChange={(e) => setMessage({ name: e.target.value })}
          ></textarea>

          {showErrors
            ? errorMessages.map((item, index) => {
                return (
                  <ul className="contact-errors" key={index}>
                    {item}
                  </ul>
                );
              })
            : null}
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
