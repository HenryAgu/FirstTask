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
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <br />
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
