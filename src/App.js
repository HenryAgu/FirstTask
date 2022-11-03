// stylesheet
import "./App.css";

// Components
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

// Import react DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
