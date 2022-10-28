// stylesheet
import "./App.css";

// Images
import profile_img from "./images/profile__img.png";
import shareImage from "./images/share.png";
import menuImage from "./images/menu.png";
import slack from "./images/slack.png";
import github from "./images/github.png";
import zuri from "./images/Zuri.png";
import HNG from "./images/HNG.png";
import I4G from "./images/I4G.png";
function App() {
  return (
    <div className="container">
      {/* The top icons */}
      <div className="navigation-icons">
        <img src={shareImage} alt="shareImage" className="share" />
        <img src={menuImage} alt="menuImage" className="menu" />
      </div>
      {/* section containing profile and name */}
      <div className="profile-header">
        <img src={profile_img} alt="profile_img" id="profile__img" />
        <b>Annette Black</b>
      </div>
      {/* Profile links */}
      <div className="profile-links">
        <a href="https://twitter.com/_henryi">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href="http://books.zuri.team/" id="books">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/" id="book__python">
          Python Books
        </a>
        <a href="https://background.zuri.team/" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          Design Books
        </a>
      </div>
      <div className="profile-socials">
        <a
          href="https://hng9.slack.com"
        >
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/HenryAgu">
          <img src={github} alt="github" />
        </a>
      </div>
      {/* Images on the footer (sponsors) */}
      <div className="sponsors">
        <img src={zuri} alt="zuri" />
        <img src={HNG} alt="HNG" />
        <img src={I4G} alt="I4G" />
      </div>
    </div>
  );
}

export default App;
