import React from "react";

// Images
import profile_img from "../images/avatar.jpeg";
import shareImage from "../images/share.png";
import menuImage from "../images/menu.png";
import slack from "../images/slack.png";
import github from "../images/github.png";

// Stylesheet
import "./Profile.css"

// Link
import { Link } from "react-router-dom" 
const Profile = () => {
  return (
    <>
      <div className="container">
        {/* The top icons */}
        <div className="navigation-icons">
          <img src={shareImage} alt="shareImage" className="share" />
          <img src={menuImage} alt="menuImage" className="menu" />
        </div>
        {/* section containing profile and name */}
        <div className="profile-header">
          <img src={profile_img} alt="profile_img" id="profile__img" />
          <b>Henry Agu</b>
        </div>
        {/* Profile links */}
        <div className="profile-links">
          <a href="https://twitter.com/_henryi">Twitter Link</a>
          <a href="https://training.zuri.team/">Zuri Team</a>
          <a href="http://books.zuri.team/" id="books">
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=aguhenrychuks"
            id="book__python"
          >
            Python Books
          </a>
          <a href="https://background.zuri.team/" id="pitch">
            Background Check for Coders
          </a>
          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design Books
          </a>
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="profile-socials">
          <a href="https://hng9.slack.com/aguhenrychuks">
            <img src={slack} alt="slack" />
          </a>
          <a href="https://github.com/HenryAgu">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
