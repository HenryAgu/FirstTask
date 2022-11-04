// React Helmet
import { Helmet } from "react-helmet";

// stylesheet
import "./Contact.css";
const Contact = () => {
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
        <form action="" className="form">
          <div className="form-name">
            <div className="first-name">
              <label>First Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
              <span>This is a hint text to help user.</span>
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
              <span>This is a hint text to help user.</span>
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input type="email" id="email" placeholder="yourname@email.com" />
            <span>This is a hint text to help user.</span>
          </div>
          <div className="message">
            <label>Message</label>
            <br />
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            <span className="message-error">Please enter a message</span>
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>
              You agree to providing your data to Henry who may contact you.
            </p>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
