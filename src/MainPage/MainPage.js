import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
//import FoodCards from './components/FoodCards'
import FoodCard from "../components/FoodCard";

import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./MainPage.css";
import "../components/FoodCard.css";

let foodCardArr = [];

function MainPage({ restaurantArr, setRestaurantArr }) {
  const [restaurants, setRestaurants] = useState([]);
  const [foodcardArray, setFoodCardArray] = useState([]);

  useEffect(() => {
    setRestaurants([...restaurantArr]);
  }, [restaurantArr]);

  foodCardArr = restaurants.map((restaurantInfo) => {
    const restaurantID = "http://maps.google.com/?q=" + restaurantInfo.name;
    return (
      <FoodCard
        title={restaurantInfo.name}
        image={restaurantInfo.icon}
        distance={restaurantInfo.distance}
        address={restaurantInfo.vicinity}
        restaurantID={restaurantID}
        tag={restaurantInfo.tag}
        rating={restaurantInfo.rating}
        priceLevel={restaurantInfo.price_level}
      ></FoodCard>
    );
  });

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

      //console.log(tempRestaurantArr);
      // Pass state up to App.js
      setRestaurantArr([...tempRestaurantArr]);
    });
  };

  return (
    <>
      <Header></Header>
      <Container className="main-page-container">
        <SearchBar setRestaurants={handleSetRestaurants} />
        <Row className="RowStyle" xs={1} md={6} lg={4}>
          {foodCardArr}
        </Row>
      </Container>
    </>
  );
}

export default MainPage;
