import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import MainPage from "./MainPage/MainPage";
import UserAccountPage from "./UserAccountPage/UserAccPage";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <LandingPage />} />
          <Route path="/main-page" exact render={() => <MainPage />} />
          <Route
            path="/user-acc-page"
            exact
            render={() => <UserAccountPage />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
