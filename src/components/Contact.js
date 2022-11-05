// React Helmet
import { Helmet } from "react-helmet";

// React Hook
import React, { useState } from "react";

// stylesheet
import "./Contact.css";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    if (
      firstName.length == " " ||
      lastName.length == " " ||
      email.length == " " ||
      message.length == " "
    ) {
      event.preventDefault();
      setError(true);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Me | Linktree Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="contact">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form action="" className="form" onSubmit={submitHandler}>
          <div className="form-name">
            <div className="first-name">
              <label>First Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {error && firstName.length <= 0 ? (
                <span>This is a hint text to help user.</span>
              ) : (
                ""
              )}
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {error && lastName.length <= 0 ? (
                <span>This is a hint text to help user.</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {error && email.length <= 0 ? (
              <span>This is a hint text to help user.</span>
            ) : (
              ""
            )}
            
          </div>
          <div className="message">
            <label>Message</label>
            <br />
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={error && message.length <= 0 ? "special-message-error":"message-default"}
            ></textarea>
            {error && message.length <= 0 ? (
              <span className="message-error">Please enter a message</span>
            ) : (
              ""
            )}
          </div>
          <div className="check">
            <input type="checkbox"/>
            <p>
              You agree to providing your data to Henry who may contact you.
            </p>
          </div>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
