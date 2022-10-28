import "./App.css"
import profile_img from "./images/profile__img.png"
function App() {
  return (
    <div className="container">
        <div className="profile-header">
          <img src={profile_img} alt="profile_img" id="profile__img"/>
          <b>Annette Black</b>
        </div>
    </div>
  );
}

export default App;
