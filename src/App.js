import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import MainPage from "./MainPage/MainPage";
import UserAccountPage from "./UserAccountPage/UserAccPage";
import LoginPage from "./LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

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
          <Route
            path="/main-page"
            exact
            render={() => (
              <MainPage
                restaurantArr={restaurants}
                setRestaurantArr={setRestaurants}
              />
            )}
          />
          <Route path="/login-page" exact render={() => <LoginPage />} />
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
