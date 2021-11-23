import { Container } from "../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "./LandingPage.css";
import { useEffect, useState } from "react";

const LandingPage = ({ restaurantArr, setRestaurantArr }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants([...restaurantArr]);
  }, [restaurantArr]);

  const handleSetRestaurants = (restaurantList) => {
    const tempRestaurantArr = restaurants;

    restaurantList.forEach((element) => {
      // Prevents duplicate search results from being added.
      if (
        restaurants.find((elem) => elem.name === element.name) === undefined
      ) {
        tempRestaurantArr.push(element);
      }

      setRestaurants([...tempRestaurantArr]);

      // Pass state up to App.js
      setRestaurantArr([...tempRestaurantArr]);
    });
  };

  return (
    <Container>
      <Header />
      <Container className="landing-content d-flex justify-content-center align-items-center">
        <SearchBar setRestaurants={handleSetRestaurants} />
      </Container>
    </Container>
  );
};

export default LandingPage;
