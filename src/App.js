import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import MainPage from "./MainPage/MainPage";
import UserAccountPage from "./UserAccountPage/UserAccPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage
                restaurantArr={restaurants}
                setRestaurantArr={setRestaurants}
              />
            )}
          />
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
