// stylesheet
import "./App.css";

// Images
import profile_img from "./images/profile__img.png";
function App() {
  return (
    <div className="container">
      <div className="profile-header">
        <img src={profile_img} alt="profile_img" id="profile__img" />
        <b>Annette Black</b>
      </div>
      <div className="profile-links">
        <a href="https://twitter.com/_henryi">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href="http://books.zuri.team/">Zuri Books</a>
        <a href="https://books.zuri.team/">Python Books</a>
        <a href="https://background.zuri.team/">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </div>
    </div>
  );
}

export default App;
